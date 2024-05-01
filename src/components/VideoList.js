import React, { useState } from 'react'
import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { CDN_URL } from '../utils/constants'

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
    <div className=''>
      <h3 className='font-bold text-white'>{title}</h3>
      <div className='mr-2 flex overflow-x-auto no-scrollbar mb-8'>
        {movieList && movieList.map((movie) => 
        <img className='w-36 m-2'
        key={movie.id}
        src={CDN_URL + movie.poster_path}
        alt="PosterImage"
        />
        )}
      </div>
    </div>
  )
}

export default VideoList