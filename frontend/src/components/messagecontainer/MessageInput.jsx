import React from 'react'
import send from '../../assets/send.png'
const MessageInput = () => {
    return (
        <div className='gap-2 flex justify-between mb-4'>
            <input type="text" placeholder="Type here" className="text-gray-500 font-bold input input-bordered w-full max-w-4xl" />
            <button className="btn btn-circle btn-outline">
                <img src={send} className="h-6 w-6" />
            </button>
        </div>
    )
}

export default MessageInput


