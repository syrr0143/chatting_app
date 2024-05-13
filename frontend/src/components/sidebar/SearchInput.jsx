import React, { useState } from 'react'
import useConversation from '../../zustand/useConversation.js'
import useGetConversation from '../../hooks/useGetConversation.js'
import toast from 'react-hot-toast';
const SearchInput = () => {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversation } = useGetConversation();
    const handlesubmit = async (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error('search term should be at least 3 character')
        }
        const findedconversation = conversation.find((e) => e.name.toLowerCase().includes(search.toLowerCase()));
        if (findedconversation) {
            setSelectedConversation(findedconversation);
            setSearch('');
            return
        } else {
            toast.error('no conversation found')
            setSearch('');
            return;
        }
    }
    return (
        <form onSubmit={handlesubmit}>
            <div className='flex items-center gap-2 m-2'>
                <label className="input input-bordered h-[3rem] ">
                    <input type="text" className="w-44 grow text-gray-500 mt-2 font-semibold" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                </label>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="bg-white  rounded-full hover:cursor-pointer w-12 h-10 p-2 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>

            </div>
        </form>
    )
}

export default SearchInput
