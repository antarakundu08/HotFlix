import React from 'react'
import { BG_IMG } from '../utils/constants'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import GPTSearchBar from './GPTSearchBar'

const GPTSearchPage = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img 
            className="h-screen object-cover md:object-none md:h-max"
            src= {BG_IMG}
            alt='logo' />
        </div>
        <GPTSearchBar className="mt-40"/>
        <GPTMovieSuggestions />
    </div>
  )
}

export default GPTSearchPage