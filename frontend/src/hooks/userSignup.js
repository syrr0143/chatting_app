import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';
import { useUserContext } from '../context/UserContext.jsx';
const baseurl = import.meta.env.baseurl;



function userSignup() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const { userSignedUp } = useUserContext();
    const signup = async ({ username,
        fullname,
        password,
        confirmPassword,
        gender,
        avatar,
        email }) => {
        const status = handleInputErrors({
            username,
            fullname,
            password,
            avatar,
            confirmPassword,
            gender,
            email
        });

        if (!status) {
            return;
        }
        try {

            const res = await fetch(`${baseurl}/api/v1/user/signup`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username,
                        name: fullname,
                        password,
                        avatar,
                        confirmPassword,
                        gender,
                        email
                    })


                })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            if (data.message === 'User with the same username already exists') {
                toast.error('User with the same username already exists')
                throw new Error(data.error);
            }
            // // set the localstorage 
            // localStorage.setItem("chat-user", JSON.stringify(data));
            // // setting the constext t be passed where ever requireed 
            // setAuthUser(data);
            toast.success("Signup successfull")
            userSignedUp();
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }

    }

    const handleInputErrors = ({ username,
        fullname,
        password,
        confirmPassword,
        gender,
        avatar,
        email }) => {
        if (!username ||
            !fullname ||
            !password ||
            !confirmPassword ||
            !gender) {
            toast.error("All fields are required to filled.")
            return false;
        }
        if (password !== confirmPassword) {
            toast.error("password and confirm password not matched.")
            return false;
        }
        if (password.length < 8) {
            toast.error("password length should be at least 8.")
            return false;
        }

        return true;
    };

    return { loading, signup };

};
export default userSignup