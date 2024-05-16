import { useState } from "react"
import { toast } from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext'
const uselogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const login = async ({ username, password }) => {
        try {
            setLoading(true);
            const response = await fetch("https://chatting-app-rt3p.onrender.com/api/v1/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username,
                    password
                })
            });
            const data = await response.json();
            //console.log(data);
            if (data.message === 'all fields are compulsory') {
                //console.log('fileds not filled')
                toast.error('input are required kikn both fields')
                throw new Error(data.error);
            }
            if (data.message === 'no user found') {
                toast.error('No such user found , please create your account')
                throw new Error(data.error);
            }
            if (data.message === 'unauthorized access, wrong password entered') {
                toast.error('wrong credentials')
                throw new Error(data.error);
            }
            toast.success('logged in successfully')
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
            setLoading(false);
        } catch (err) {
            //console.log(err);
            toast.error(err.message)
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }
    return { loading, login };
}

export default uselogin