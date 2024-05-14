import React from 'react'
import { useAuthContext } from '../../context/AuthContext.jsx';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
    const userData = JSON.parse(localStorage.getItem('chat-user'));
    const image = userData.user.avatar;
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();

    const receiverimage = `https://avatar.iran.liara.run/username?username=${selectedConversation.name}`
    const senderimage = `https://avatar.iran.liara.run/username?username=${authUser.user.name}`
    const fromme = message.senderid === authUser.user._id;
    const chatclassname = fromme ? 'chat-end' : 'chat-start';
    const profilepic = fromme ? senderimage : receiverimage;
    const bubbleBgColor = fromme ? '' : 'bg-blue-500';
    const shakeclass = message.shouldShake ? "shake" : "";
    return (
        <div className={`chat ${chatclassname} `}>
            <div className={`chat-image ${profilepic}`}>
                <div className="w-10 rounded-full">
                    <img alt="User Avatar" src={profilepic} />
                </div>
            </div>
            <div className={`chat-bubble ${bubbleBgColor} ${shakeclass}`}>{message.message}</div>
            <div className="chat-footer text-gray-300 opacity-75">
                {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}

            </div>
        </div>
    )
}
export default Message
