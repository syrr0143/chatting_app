import { useEffect, useState } from "react";
import { useUserContext } from '../context/UserContext.jsx'
import toast from "react-hot-toast";

const useGetConversation = () => {
    const [loading, setLoading] = useState(false);
    const [conversation, setConversation] = useState([]);
    const { userChanged } = useUserContext();

    useEffect(() => {
        const getConversation = async () => {
            setLoading(true);
            try {
                const userData = JSON.parse(localStorage.getItem('chat-user'));
                const token = userData.token;
                const res = await fetch("http://localhost:4000/api/v1/user/allUsers", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await res.json(); // Await the response body parsing
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversation(data.users);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        getConversation(); // Invoke the getConversation function
    }, [userChanged]); // Empty dependency array to run only once

    return { loading, conversation };
};

export default useGetConversation;
