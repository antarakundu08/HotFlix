import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';

const Browse = () => {

  useNowPlayingMovies();


  return (
    <div>
      <Header />
      <MainComponent/>
      <SecondaryComponent />
    </div>
  )
}

export default Browse