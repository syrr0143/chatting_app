import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    // mobileNumber: {
    //     type: String,
    //     required: true,
    //     unique: true,
    //     validate: {
    //         validator: function (v) {
    //             return /^\+91-[1-9]\d{9}$/.test(v); // Regex pattern for an Indian phone number
    //         },
    //         message: props => `${props.value} is not a valid Indian phone number!`
    //     }

    // }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) {
        return next();
    } else {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    }
});

userSchema.methods.isPasswordCorrect = async function (password) {
    console.log(password, this.password)
    return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function (_id) {
    return jwt.sign({
        _id: this._id,
        email: this.email
    },
        process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY })
}

export const User = mongoose.model('User', userSchema);
