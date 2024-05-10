import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { VideoBackground } from './VideoBackground';

const MovieDetails = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state.data;

  return (
    <div className='h-screen md:h-auto bg-black'>
      <div className='-mt-5 z-10 absolute bg-black'>
          <VideoBackground movieId={state.id} />
          <h3 className='font-extrabold text-xl md:text-5xl m-5 text-red-800'>{state.original_title}</h3>
          { 
            state.vote_average && 
            <h4 className='text-white mx-8 font-bold'>{"Movie Rating: "+state.vote_average }</h4>
          }
          <h4 className='text-white mx-8 my-3 font-semibold'>{state.overview }</h4>
      </div>
      <div className='flex justify-center md:hidden'>
        <button 
        className='fixed bottom-2 bg-red-800 text-white p-4 rounded-lg w-1/2 m-3'
        onClick={() => {navigate(-1)}}> Back </button>
      </div>
    </div>
  )
}

export default MovieDetails