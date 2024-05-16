import { useState } from "react"
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const logout = async () => {
        setLoading(true);
        try {
            const userData = JSON.parse(localStorage.getItem('chat-user'));
            const token = userData.token;
            const res = await fetch("https://chatting-app-rt3p.onrender.com/api/v1/user/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error)
            }
            toast.success('logged out successfully');
            localStorage.removeItem("chat-user")
            setAuthUser(null);
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false);
        }
    };
    return { loading, logout };
}

export default useLogout