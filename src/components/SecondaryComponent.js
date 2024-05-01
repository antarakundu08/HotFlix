import React from 'react'
import { NOW_PLAYING_API_URL, POPULAR_API_URL, TOP_RATED_API_URL, UPCOMING_API_URL } from '../utils/constants'
import VideoList from './VideoList'

const SecondaryComponent = () => {
  return (
    <div className='relative p-6 mt-[-150px] z-10 bg-black'>
      <div className="bg-opacity-175 md:bg-opacity-50">
        <VideoList title={"Now Playing"} API_URL={NOW_PLAYING_API_URL}/>
      </div>
      <div>
        <VideoList title={"Popular"} API_URL={POPULAR_API_URL}/>
      </div>
      <div >
        <VideoList title={"Top Rated"} API_URL={TOP_RATED_API_URL}/>
      </div>
      <div >
        <VideoList title={"Upcoming"} API_URL={UPCOMING_API_URL}/>
      </div>
    </div>
  )
}

export default SecondaryComponent