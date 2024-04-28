import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

export const VideoBackground = ({movieID}) => {
    useMovieTrailer(movieID)
    const trailer = useSelector(store => store.movie?.movieTrailer);
  return (
    <div className='bg-gradient-to-r from-black'>
        <iframe className='w-full aspect-video bg-gradient-to-r from-black'
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        >

        </iframe>
    </div>
  )
}
