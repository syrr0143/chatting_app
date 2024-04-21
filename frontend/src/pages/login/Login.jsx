import React from 'react'

function Login() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

                <div className='p-6 w-full bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'> <h1 className='text-3xl font-semibold text-center text-gray-300 '>Login <span className='text-blue-500'>ChatApp</span></h1>
                    <form >
                        <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base label-text text-white '>Username</span>
                                <input type="text" placeholder='Enter Your username ' className='w-full input input-bordered h-10' />
                            </label>
                        </div>
                        <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base  label-text text-white '>Password</span>
                                <input type="text" placeholder='Enter Your Password ' className='w-full input input-bordered h-10' />
                            </label>
                        </div>
                        <a href="" className='text-white hover:underline mt-2 inline-block hover:text-blue-300'>Don't have an account ?</a>
                        <div>
                            <button class="btn btn-sm mt-2 btn-outline w-36  btn-info">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
