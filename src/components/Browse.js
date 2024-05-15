import React from 'react'
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearchPage from './GPTSearchPage';
import Header from './Header'
import MainComponent from './MainComponent';
import SecondaryComponent from './SecondaryComponent';
import Shimmer from './Shimmer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movieLoaded = useSelector(store => store?.movie?.nowPlayingMovies);
  const gptToggle = useSelector(store => store?.gpt?.showGptSearch);

  if(gptToggle === undefined || gptToggle === null || !movieLoaded) return <Shimmer />;

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