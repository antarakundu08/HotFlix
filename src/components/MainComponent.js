import React from 'react'
import { useSelector } from 'react-redux'
import { VideoBackground } from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainComponent = () => {
    
  const movie = useSelector((store) => store.movie?.nowPlayingMovies)
  if (!movie) return
  const {original_title, overview, id} = movie[0]
  return (
    <div className="pt-[30%] bg-black md:pt-0">
    <VideoTitle title={original_title} overview={overview} />
    <VideoBackground movieId={id} />
  </div>
  )
}

export default MainComponent