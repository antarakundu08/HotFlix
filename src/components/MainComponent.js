import React from 'react'
import { useSelector } from 'react-redux'
import { VideoBackground } from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainComponent = () => {
    
  const movie = useSelector((store) => store.movie?.nowPlayingMovies)
  if (!movie) return 
  const {id} = movie[0]
  return (
    <div className="pt-[30%] bg-black md:pt-0">
    <VideoTitle movie={movie[0]}/>
    <VideoBackground movieId={id} />
  </div>
  )
}

export default MainComponent
