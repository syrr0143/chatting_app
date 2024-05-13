import React, { useEffect, useRef } from 'react';
import Message from './Message.jsx'
import useGetMessages from '../../hooks/useGetMessages.js';

const Messages = () => {
    const { loading, messages } = useGetMessages();
    const messagesEndRef = useRef(null);
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
        }
    }
    if (loading) {
        return <div>Loading...</div>;
    }
    if (!messages) {
        return <div className='text-white'>This chat is end to end encrypted , start chat now to view messages </div>;
    }
    return (
        <div >
            {messages?.map((message) => (
                <Message key={message._id} message={message} />
            ))}
            <div className='mt-24' ref={messagesEndRef}></div> {/* Empty div to scroll to */}
        </div>
    );
}
export default Messages;


