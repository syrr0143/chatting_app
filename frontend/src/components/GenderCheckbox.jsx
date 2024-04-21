import React from 'react'

const GenderCheckbox = () => {
    return (
        <div className='flex flex-row justify-around'>
            <div >
                <label htmlFor="" className='m-2 text-white  text-base'>Male</label>
                <input type="checkbox" defaultChecked className="checkbox h-4 w-4 border-orange-400 " />

            </div>
            <div>
                <label htmlFor="" className='text-base text-white m-2'>Female</label>
                <input type="checkbox" defaultChecked className="checkbox border-rose-500 h-4 w-4" />
            </div>
        </div>
    )
}

export default GenderCheckbox
