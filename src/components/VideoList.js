import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API_OPTIONS } from '../utils/constants'
import { CDN_URL } from '../utils/constants'
import MovieDetails from './MovieDetails'
import MoviePoster from './MoviePoster'

const VideoList = ({title, API_URL}) => {

  const [movieList, setMovieList] = useState(null)

  const getVideoList = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    setMovieList(json.results);
  }

  useEffect(() => {
    getVideoList();
  }, [])
/*
<VideoCard key={movie.id} poster_id={movie.poster_path} />
*/

  return (
    <div className='px-6'>
      <h3 className="text-lg font-extrabold md:text-2xl py-4 text-white">{title}</h3>
      <div className='mr-2 flex overflow-x-auto no-scrollbar mb-8'>
        {movieList && movieList.map((movie) => 
          <Link 
            to={"/movie/"+movie.id} 
            key={movie.id} 
            state={{data: movie}}
            style={{display: 'contents'}}
            > 
           <MoviePoster poster_path={movie.poster_path} />
          </Link>
        )}
      </div>
    </div>
  )
}

export default VideoList