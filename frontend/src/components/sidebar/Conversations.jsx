import Conversation from "./Conversation.jsx";
import useGetConversation from "../../hooks/useGetConversation.js";
import React from 'react';

function Conversations() {
    const { loading, conversation } = useGetConversation();
    // console.log('conversation', conversation);
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversation?.map((conversationItem) => (
                <Conversation key={conversationItem._id} conversation={conversationItem} />
            ))}
        </div>
    );
}

export default Conversations;
