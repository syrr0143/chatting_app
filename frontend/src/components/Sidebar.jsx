import React from 'react'
import SearchInput from './sidebar/SearchInput.jsx'
import Conversation from './sidebar/Conversation.jsx'
import LogOutButton from './sidebar/LogOutButton.jsx'
const Sidebar = () => {
    return (
        <div className=' w-[450px]  p-4 flex flex-col '>
            <SearchInput />
            <div className='border-r no-scrollbar border-slate-500 overflow-auto'>

                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
                <Conversation />
            </div>
            <LogOutButton />
        </div>
    )
}

export default Sidebar
