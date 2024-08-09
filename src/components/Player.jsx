import React, { useContext } from 'react'

import { assets} from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  const {track,seekBar, seekBg, playStatus, play, pause, time, previous, next, seekSong} = useContext(PlayerContext)
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-1'>
      <div className="hidden lg:flex items-center gap-4">
         <img className='w-10' src={track.image} alt="" />
         <div>
        <p>{track.name}</p>
        <p>{track.desc.slice(0,12)}</p>
        </div>
       </div>
       <div className='flex flex-col items-center justify-between gap-1 m-auto'>
        <div className='flex gap-4'>
            <img className='w-5 cursor-pointer' src={assets.shuffle} alt="" />
            <img onClick={previous} className='w-5 cursor-pointer' src={assets.prev} alt="" />
            {playStatus
            ?<img onClick={pause} className='w-5 cursor-pointer' src={assets.pause} alt="" />
            :<img onClick={play} className='w-5 cursor-pointer' src={assets.play} alt="" />
            }
            <img onClick={next} className='w-5 cursor-pointer' src={assets.next} alt="" />
            <img className='w-5 cursor-pointer' src={assets.loop} alt="" />
        </div>
        <div className='flex items-center gap-5'>
            <p>{time.currentTime.minutes}:{time.currentTime.second}</p>
            <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full items-center justify-between cursor-pointer'>
                <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full ' />
            </div>
            <p>{time.totalTime.minutes}:{time.totalTime.second}</p>
        </div>
       </div>
       <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays} alt="" />
        <img className='w-4' src={assets.mic} alt="" />
        <img className='w-4' src={assets.queue} alt="" />
        <img className='w-4' src={assets.speaker} alt="" />
        <img className='w-4' src={assets.low_volume} alt="" />

        <div className='w-20 bg-slate-50 h-1 rounded cursor-pointer'>

        </div>
        <img className='w-4' src={assets.mini_player} alt="" />
        <img className='w-4' src={assets.zoom} alt="" />
       </div>
    </div>
  )
}

export default Player
