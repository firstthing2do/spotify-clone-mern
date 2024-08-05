import React from 'react'
import Navbar from './Navbar'
import { albumData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { songsData } from '../assets/assets'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumData.map((item, index) => (<AlbumItem key={index} name={item.name} id={item.id} image={item.image} desc={item.desc} />))}
        </div>
      </div>
      {/* <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Selection</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item, index)=> (<SongItem key={index} name={item.name} id={item.id} image={item.image} desc={item.desc} />))}
        </div>
      </div> */}
    </>
  )
}

export default DisplayHome
