import React from 'react'
import logout from '../../assets/logout.svg'
const LogOutButton = () => {
    return (
        <div className='justify-center '>
            <button className=" hover:bg-red-400 rounded-3xl m-0 bg-white"><img src={logout} alt="" className='h-10 w-28 m-0' /></button>
        </div>
    )
}

export default LogOutButton
