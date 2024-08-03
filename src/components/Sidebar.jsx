import React from 'react'
import {assets} from '../assets/assets'

const sidebar = () => {
  return (
    <div className='w-[25%] h-full p-1 flex-col gap-2 text-white hidden lg:flex'>
         <div className='bg-[#121212]  h-[50%] rounded flex flex-col justify-around'>
            <div className="flex items-center gap-3 pl-8 cursor-pointer ">
                <img className='w-6' src={assets.home_icon} alt="" />
                <p className='font-bold'>Home</p>
            </div>
            <div className="flex items-center gap-3 pl-8 cursor-pointer ">
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div> 
        <div className="bg-[#121212] h-[20%] rounded">
            <div className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img className='w-8' src={assets.stack} alt="" />
                    <p className="font-semibold">Your library</p>
                </div>
                <div className="flex items-center gap-3">
                    <img src={assets.plus} alt="" className="w-5" />
                    <img src={assets.arrow} alt="" className="w-5" />
                </div>
            </div>
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
                <h1>Create your first playlist</h1>
                <p className='font-light'>it's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create playlist</button>
            </div>
            <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-3 pl-4 mt-4">
                <h1>Let's find some podcast for you</h1>
                <p className='font-light'> update on new episodes</p>
                <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browser podcast</button>
            </div>
        </div>
    </div>
  )
}

export default sidebar
