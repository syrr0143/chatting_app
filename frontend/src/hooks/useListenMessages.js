import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext.jsx'
import useConversation from '../zustand/useConversation.js'
import sound from '../assets/sound/ring.mp3'
const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation();
    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sounds = new Audio(sound);
            sounds.play()
            setMessages([...messages, newMessage]);
        })
        return () => {
            socket?.off("newMessage");
        }
    }, [socket, setMessages, messages])
    return null;
}

export default useListenMessages
