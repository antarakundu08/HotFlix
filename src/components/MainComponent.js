import React from 'react'
import { useSelector } from 'react-redux'
import { VideoBackground } from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainComponent = () => {
    
  const movie = useSelector((store) => store.movie?.nowPlayingMovies)
  if (!movie) return
  const {original_title, overview, id} = movie[0]
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainComponent