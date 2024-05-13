import React, { useState } from 'react'
import send from '../../assets/send.png'
import useSendMessage from '../../hooks/useSendMessage.js';
const MessageInput = () => {
    const [message, setMessage] = useState('');
    const { loading, sendMessages } = useSendMessage();
    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!message) { return; }
        await sendMessages(message);
        setMessage('');
    }
    return (
        <form onSubmit={handlesubmit} className="fixed bottom-0 w-full max-w-4xl mx-auto p-4">
            <div className='gap-2 flex justify-between'>
                <input type="text" placeholder="Type here" className="text-gray-500 font-bold input input-bordered w-full"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)} />
                <button className="btn btn-circle btn-outline">
                    {loading ? <div className='loading loading-spinner'></div> : <img src={send} className="h-6 w-6" />}
                </button>
            </div>
        </form>

    )
}

export default MessageInput


