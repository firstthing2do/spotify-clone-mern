import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={ assets.left_arrow} alt="" />
            <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={ assets.right_arrow} alt="" />
        </div>
        <div className='flex items-center gap-4'>
          <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Primium</p>
          <p className='bg-black text-[15px] rounded-2xl px-4 py-1 cursor-pointer'>Install App</p>
          <p className=' bg-purple-600 text-black w-7 h-7 rounded-full flex items-center justify-center'>A</p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
      <p className=' bg-black py-1 px-4 rounded-2xl cursor-pointer'>Music</p>
      <p className=' bg-black py-1 px-4 rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
    </>
  )
}

export default Navbar
