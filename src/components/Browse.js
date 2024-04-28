import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'

const Browse = () => {

  useNowPlayingMovies();
  
  return (
    <div>
      <Header />
      <div className='absolute'>
            <h1 className='font-extrabold'>BROWSE MEEE!!!!</h1>
        </div>
    </div>
  )
}

export default Browse