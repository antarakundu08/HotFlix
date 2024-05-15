import React from 'react'
import { useSelector } from 'react-redux'
import VideoList from './VideoList'

const SecondaryComponent = () => {

  const now_playing = useSelector(store => store?.movie?.nowPlayingMovies)
  const popular_movies = useSelector(store => store?.movie?.popularMovies)
  const top_rated_movies = useSelector(store => store?.movie?.topRatedMovies)
  const upcoming_movies = useSelector(store => store?.movie?.upcomingMovies)
  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <VideoList title={"Now Playing"} movieList={now_playing}/>
        <VideoList title={"Popular"} movieList={popular_movies}/>
        <VideoList title={"Top Rated"} movieList={top_rated_movies}/>
        <VideoList title={"Upcoming"} movieList={upcoming_movies}/>
      </div>
    </div>
  )
}

export default SecondaryComponent