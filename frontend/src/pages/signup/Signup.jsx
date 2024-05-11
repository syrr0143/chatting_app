import React, { useState } from 'react'
import GenderCheckbox from '../../components/GenderCheckbox.jsx'
import { Link } from 'react-router-dom'
import userSignup from '../../hooks/userSignup.js'
function Signup() {
    const { loading
        , signup } = userSignup();
    const [input, setInput] = useState({
        username: '',
        fullname: '',
        password: '',
        confirmPassword: '',
        gender: '',
        email: '',
        avatar: '',
    });
    const handlesubmit = async (e) => {
        e.preventDefault();
        console.log(input)
        await signup(input);
    }


    return (

        <div>
            <div className="flex flex-col items-center justify-center min-w-96 mx-auto">

                <div className='p-6 w-full bg-gray-400 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100'> <h1 className='text-3xl font-semibold text-center text-gray-300 '>SignUp <span className='text-blue-500'>ChatApp</span></h1>
                    <form onSubmit={handlesubmit}>
                        <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base label-text text-white '>Full Name</span>
                                <input type="text" placeholder='Enter Your full name ' className=' bg-black text-white w-full input input-bordered h-10' value={input.fullname}
                                    onChange={(e) => setInput({ ...input, fullname: e.target.value })} />
                            </label>
                        </div>
                        <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base label-text text-white '>Username</span>
                                <input autoSave='true' type="text" placeholder='Enter Your username ' className=' bg-black text-white  w-full input input-bordered h-10' value={input.username}
                                    onChange={(e) => setInput({ ...input, username: e.target.value })} />
                            </label>
                        </div>
                        {/* <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base label-text text-white ' >Upload your profile pic</span>
                                <input
                                    type="file"
                                    placeholder='upload file'
                                    className='bg-black text-white w-full input input-bordered h-10'
                                    onChange={(e) => setInput({ ...input, avatar: e.target.files[0] })}
                                />
                            </label>
                        </div> */}

                        {/* <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base label-text text-white '>Email id</span>
                                <input type="email" placeholder='Enter Your email id ' className=' bg-black w-full text-white input input-bordered h-10' value={input.email}
                                    onChange={(e) => setInput({ ...input, email: e.target.value })} />
                            </label>
                        </div> */}
                        <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base  label-text text-white '>Password</span>
                                <input type="text" placeholder='Enter Your Password ' className='bg-black w-full input text-white input-bordered h-10' value={input.password}
                                    onChange={(e) => setInput({ ...input, password: e.target.value })} />
                            </label>
                        </div>
                        <div>
                            <label className='label block p-2 text-left'>
                                <span className='text-base  label-text text-white '>Confirm Password</span>
                                <input type="text" placeholder='Enter Your Password ' className='bg-black w-full input text-white input-bordered h-10' value={input.confirmPassword}
                                    onChange={(e) => setInput({ ...input, confirmPassword: e.target.value })} />
                            </label>
                        </div>
                        <GenderCheckbox onCheckBoxChange={(value) => setInput({ ...input, gender: value })} selectedCheckbox={input.gender} />
                        <Link to="/login" className='text-white hover:underline mt-2 inline-block hover:text-blue-300'>have an account ?</Link>
                        <div>
                            <button className="btn btn-sm mt-2 btn-outline w-36  btn-info" disabled={loading}
                            >{loading ? <span className='loading loading-spinner'></span> : "SignUp"}</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Signup
