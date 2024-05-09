import React from 'react'
import { NOW_PLAYING_API_URL, POPULAR_API_URL, TOP_RATED_API_URL, UPCOMING_API_URL } from '../utils/constants'
import VideoList from './VideoList'

const SecondaryComponent = () => {
  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <VideoList title={"Now Playing"} API_URL={NOW_PLAYING_API_URL}/>
        <VideoList title={"Popular"} API_URL={POPULAR_API_URL}/>
        <VideoList title={"Top Rated"} API_URL={TOP_RATED_API_URL}/>
        <VideoList title={"Upcoming"} API_URL={UPCOMING_API_URL}/>
      </div>
    </div>
  )
}

export default SecondaryComponent