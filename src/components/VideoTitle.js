import React from 'react'
import { INFO_ICON, PLAY_ICON } from '../utils/constants'


const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-lg text-white'>{title}</h1>
        <p className='hidden md:inline-block w-1/3  text-white'>{overview}</p>
        <div className='flex pt-4'>
            <button className='bg-white text-black px-4 py-2 rounded-lg font-semibold flex hover:opacity-80'>
                <img className='w-4 m-2'
                src= {PLAY_ICON}
                alt='playIcon' />
                Play
            </button>
            <button 
                className='bg-white text-black px-4 py-2 rounded-lg font-semibold mx-2 flex hover:opacity-40'
                >
                <img className='w-4 m-2'
                src= {INFO_ICON}
                alt='infoIcon' />
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle