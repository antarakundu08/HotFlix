import React from 'react'
import { CDN_URL } from '../utils/constants'

const MoviePoster = ({poster_path}) => {
  if (!poster_path) return null
  return (
      <img className='w-36 m-2'
        src={CDN_URL + poster_path}
        alt="PosterImage"
        />

        
  )
}

export default MoviePoster