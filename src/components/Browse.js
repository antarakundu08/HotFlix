import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import GPTSearchPage from './GPTSearchPage';
import Header from './Header'
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';

const Browse = () => {

  useNowPlayingMovies();
  const gptToggle = useSelector(store => store?.gpt?.showGptSearch);

  return (
    <div>
      <Header />
      {gptToggle ? (
        <GPTSearchPage />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  )
}

export default Browse