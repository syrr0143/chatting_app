import React from 'react'
import SearchInput from './sidebar/SearchInput.jsx'
import Conversation from './sidebar/Conversation.jsx'
import LogOutButton from './sidebar/LogOutButton.jsx'
import Conversations from './sidebar/Conversations.jsx'
const Sidebar = () => {
    return (
        <div className=' lg:w-1/3 sm:w-1/3  p-4 flex flex-col '>
            <SearchInput />
            <div className='border-r no-scrollbar border-slate-500 overflow-auto'>

                <Conversations />


            </div>
            <LogOutButton />
        </div>
    )
}

export default Sidebar
