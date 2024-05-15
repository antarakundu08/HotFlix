import React from 'react'
import { CDN_URL } from '../utils/constants'

const MoviePoster = ({poster_path}) => {
  if (!poster_path) return null
  return (
      <img className='w-36 m-2 hover:m-0 hover:border-2 hover:border-red-800 hover:border-spacing-2'
        src={CDN_URL + poster_path}
        alt="PosterImage"
        />

        
  )
}

export default MoviePoster