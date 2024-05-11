import React from 'react'
import Messages from './messagecontainer/Messages'
import MessageInput from './messagecontainer/MessageInput'
import startmessage from '../assets/startmessage.gif'
import start from '../assets/start.png'

const MessageContainer = () => {
    let chatselected = true;
    return (
        <div className='lg:min-w-[68vw] md:w-[40em] sm:w-[50vw] flex flex-col'>
            {chatselected ? (
                <>
                    <div className='bg-slate-200 mt-6 h-[3rem] rounded-lg px-4 py-2 mb-2'>
                        <span className='label-text text-gray-500 font-bold'>John Doe</span>
                    </div>
                    <div className='overflow-auto no-scrollbar mr-2'>
                        <Messages />
                        <Messages />
                        <Messages />
                        <Messages />
                        <Messages />
                        <Messages />
                        <Messages />
                        <Messages />

                    </div>
                    <MessageInput />
                </>
            ) : (
                <NoChatSelected />
            )}
        </div>
    )
}

const NoChatSelected = () => {
    return (
        <div className='flex w-full items-center h-full justify-center'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Welcome John doe </p>
                <p>Select a chat to start messaging </p>
                <img src={start} alt="" />
            </div>
        </div>
    )
}

export default MessageContainer
