import React, { useState } from 'react'
import useConversation from '../zustand/useConversation.js';
import { toast } from 'react-hot-toast'
const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    const sendMessages = async (message) => {
        setLoading(true);
        try {
            const userData = JSON.parse(localStorage.getItem('chat-user'));
            const token = userData.token;
            const res = await fetch(`https://chatting-app-rt3p.onrender.com/api/v1/message/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    message
                })
            })
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setMessages([...messages, data?.message]);

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return { sendMessages, loading }
}

export default useSendMessage
