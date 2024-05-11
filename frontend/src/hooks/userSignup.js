import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';

function userSignup() {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
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

            const res = await fetch("http://localhost:4000/api/v1/user/signup",
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
            // set the localstorage 
            localStorage.setItem("chat-user", JSON.stringify(data));
            // setting the constext t be passed where ever requireed 
            setAuthUser(data);
            toast.success("Signup successfull")
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
            !gender ||
            !email) {
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