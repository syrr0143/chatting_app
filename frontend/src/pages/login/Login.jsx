import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import uselogin from '../../hooks/uselogin';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { loading, login } = uselogin();
    const handlesubmit = async (e) => {
        e.preventDefault();
        //console.log(username, password);
        await login({ username, password })
    }
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

                <div className='p-6 w-full bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'> <h1 className='text-3xl font-semibold text-center text-gray-300 '>Login <span className='text-blue-500'>ChatApp</span></h1>
                    <form onSubmit={handlesubmit}>
                        <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base label-text text-white '>Username</span>
                                <input type="text" placeholder='Enter Your username ' className='w-full input input-bordered h-10' value={username} onChange={(e) => setUsername(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base  label-text text-white '>Password</span>
                                <input type="text" placeholder='Enter Your Password ' className='w-full input input-bordered h-10' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                        </div>
                        <Link to="/signup" className='text-white hover:underline mt-2 inline-block hover:text-blue-300'>Don't have an account ?</Link>
                        <div>
                            <button className="btn btn-sm mt-2 btn-outline w-36  btn-info">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
