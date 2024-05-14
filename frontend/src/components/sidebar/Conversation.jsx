import React from 'react';
import useConversation from '../../zustand/useConversation.js';
import { useSocketContext } from '../../context/SocketContext.jsx';

const Conversation = ({ conversation }) => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const { onlineusers } = useSocketContext();

    // Ensure both conversation._id and onlineusers contain strings
    const isOnline = onlineusers.includes(conversation._id.toString());

    console.log('Is online:', isOnline, 'Conversation ID:', conversation._id);
    console.log('Online users:', onlineusers);

    return (
        <>
            <div
                className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-sky-500" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className="w-12 rounded-full">
                        <img src={`https://avatar.iran.liara.run/username?username=${conversation.name}`} alt="avatar" />
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='text-gray-200 font-bold '>{conversation.name}</p>
                        <span className='text-xl'><img className='w-10' src={`https://avatar.iran.liara.run/public`} alt="icon" /></span>
                    </div>
                </div>
            </div>
            <div className="divider flex-row bg-white h-[0.010rem] p-0 m-2"></div>
        </>
    );
}

export default Conversation;
