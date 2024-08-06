import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumData} from'../assets/assets'

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumsData = albumData[id];

    console.log(albumData)

  return (
    <>
      <Navbar />
    </>
  )
}

export default DisplayAlbum
