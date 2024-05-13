import React, { useEffect, useState } from 'react'
import useConversation from '../zustand/useConversation.js';
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const userData = JSON.parse(localStorage.getItem('chat-user'));
                const token = userData.token;
                const res = await fetch(`http://localhost:4000/api/v1/message/${selectedConversation._id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await res.json(); // Await the response body parsing
                console.log(data)
                if (data.error) {
                    console.log(data.error)
                    throw new Error(data.error);
                }
                setMessages(data.conversation?.message);
            } catch (error) {
                console.log(error)

                toast.error(error.messages)
            } finally {
                setLoading(false)
            }
        }
        if (selectedConversation?._id) {
            getMessages()
        }
    }, [selectedConversation?._id, setMessages])
    return { messages, loading }
}

export default useGetMessages
