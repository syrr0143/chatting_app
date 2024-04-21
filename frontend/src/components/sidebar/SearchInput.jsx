import React from 'react'

const SearchInput = () => {
    return (
        <div className='flex items-center gap-2 m-2'>
            <label className="input input-bordered h-[3rem] ">
                <input type="text" className="w-44 grow text-gray-500 mt-2 font-semibold" placeholder="Search" />
            </label>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="bg-white  rounded-full hover:cursor-pointer w-12 h-10 p-2 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

        </div>
    )
}

export default SearchInput
