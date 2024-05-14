import React from 'react'
import Sidebar from '../../components/Sidebar'
import MessageContainer from '../../components/MessageContainer'
function Home() {
    return (
        <div className='flex sm:h-[92vh] w-full  no-scrollbar md:h-[92vh] rounded-lg gap-2  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 overflow-y-auto no-scrollbar'>
            <Sidebar />
            <MessageContainer />
        </div>
    )
}

export default Home
