import { User } from '../models/user.model.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
const generateAccessToken = async (req, res) => {
    try {
        const user = await User.findById(_id);
        if (!user) {
            return res.status(404).json({ message: "user not found" })
        }
        const accessToken = await user.generateAccessToken(_id);
        console.log('access token', accessToken);
        await user.save({ validateBeforeSave: false });
        return accessToken;
    } catch (error) {
        return res.status(500).json({ message: `internal server error, something went wrong`, error: error.message })
    }
}
const signup = async (req, res) => {
    try {
        const { name, username, password } = req.body;
        if ([name, username, password].some((field) => field?.trim() === "")) {
            return res.status(400).json({ message: "no details enetered for name,username, passowrd" });
        }
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            return res.status(409).json({ message: "User with the same username already exists", existinguser: existingUser });
        };
        const avatarLocalPath = req.files?.avatar[0]?.path;
        if (!avatarLocalPath) {
            return res.status(400).json({ message: "avatar file is required from local path" });
        };
        const avatar = await uploadOnCloudinary(avatarLocalPath);
        if (!avatar) {
            return res.status(400).json({ message: "avatar file is required to be uploaded successfully" });
        }

        const newUser = await User.create({ name: name, username: username, password: password, avatar: avatar.url });

        return res.status(201).json({ message: "new user created successfully", userCreated: newUser })
    } catch (error) {
        return res.status(500).json({ message: `internal server error, something went wrong`, error: error.message })
    }
}

const userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password)
        if ([username, password].some((field) => field?.trim() === "")) {
            return res.status(400).json({ message: "all fields are compulsory" });
        }
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: "no user found" })
        }

        const passwordMatch = await user.isPasswordCorrect(password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "unauthorized access, wrong password entered" })
        }
        const accessToken = await user.generateAccessToken(user._id);
        console.log(accessToken);
        const userLogging = await User.findById(user._id).select("-password");
        const options = {
            httpOnly: true,
            secure: true
        }

        return res.status(200)
            .cookie("token", accessToken, options)
            .json({ message: "password matched , login successful", user: userLogging, token: accessToken });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: `internal server error, something went wrong`, error: error.message })
    }
};

const logout = async (req, res) => {
    try {
        res.clearCookie('accessToken');
        res.status(200).json({ message: 'logged out successfully' });

    } catch (error) {
        return res.status(500).json({ message: `internal server error, something went wrong`, error: error.message })
    }
};

const getallusers = async (req, res) => {
    try {
        const userId = req.user._id;
        if (!userId) {
            return res.status(400).json({ message: "user not logged in , you must login first" })
        }
        const loggedInuser = await User.findById({ _id: userId });
        if (!loggedInuser) {
            return res.status(404).json({ message: "user not found" })
        }
        const allUser = await User.find({ _id: { $ne: loggedInuser } });
        if (!allUser) {
            return res.status(404).json({ message: "no user found" });
        }
        return res.status(200).json({ message: "all users found", users: allUser });
    } catch (error) {
        return res.status(500).json({ message: `internal server error, something went wrong`, error: error.message })
    }
}
// sending media in chat like photo , video , location tag, video call ,audio call, search bar , create group , dm , 
const sendMedia = async (req, res) => {
    try {
        const userId = req.user._id;
        if (!userId) {
            return res.status(400).json({ message: "user not logged in , you must login first" })
        }
        const loggedInuser = await User.findById({ _id: userId });
        if (!loggedInuser) {
            return res.status(404).json({ message: "user not found" })
        }
        const media = await uploadOnCloudinary(req.files?.media[0]?.path);
        if (!media) {
            return res.status(400).json({ message: "media file is required to be uploaded successfully" });
        };

    } catch (error) {
        return res.status(500).json({ message: `internal server error, something went wrong`, error: error.message })
    }
}
export { signup, logout, userLogin, getallusers };