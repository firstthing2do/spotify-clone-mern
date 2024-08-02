import React from 'react'
import Sidebar from './components/Sidebar'
import Player from './components/Player'

const App = () => {
  return (
    <div className='h-screen bg-black '>
      <div className="w-[90%] flex"></div>
      <Sidebar />
      <Player/>
    </div>
  )
}

export default App
