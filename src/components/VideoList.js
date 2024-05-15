import React from 'react'
import { Link } from 'react-router-dom'
import MoviePoster from './MoviePoster'

const VideoList = ({title, movieList}) => {

  return (
    
    <div className='px-6'>
      <h3 className="text-lg font-extrabold md:text-2xl py-4 text-white">{title}</h3>
      <div className='flex overflow-x-auto no-scrollbar mb-8'>
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