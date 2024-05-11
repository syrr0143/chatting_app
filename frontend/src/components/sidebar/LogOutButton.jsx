import React from 'react'
import logoutlogo from '../../assets/logout.svg'
import useLogout from '../../hooks/useLogout'
const LogOutButton = () => {
    const { loading, logout } = useLogout();

    return (

        loading ? (
            <span className='loading loading-spinner m-0 p-4 bg-white'> </span>
        ) : (
            <div className='justify-center absolute bottom-0 p-2 z-10'>
                <button className=" hover:bg-red-400 rounded-3xl m-0 bg-white" onClick={logout}><img src={logoutlogo} alt="" className='h-10 w-28 m-0' /></button>
            </div>
        )

    )
}

export default LogOutButton
