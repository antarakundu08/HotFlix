import React from 'react'
import { useSelector } from 'react-redux'
import VideoList from './VideoList'

const GPTMovieSuggestions = () => {
  const movieNames = useSelector( store => store.gpt.movieNames)
  if (!movieNames) return <div></div>
  console.log(movieNames)
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-60'>
      {movieNames && movieNames.map( (movie) =>
        (<VideoList title={movie} key={movie} API_URL={ "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1"}/>)
      )}
    </div>
  )
}

export default GPTMovieSuggestions