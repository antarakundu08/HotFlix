import React from 'react'
import { BG_IMG } from '../utils/constants'
import ErrorBox from './ErrorBox'

const ErrorAPI = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img 
            className="h-screen object-cover md:object-none md:h-max"
            src= {BG_IMG}
            alt='logo' />
            <ErrorBox className="my-auto z-30" />
        </div>
    </div>
  )
}

export default ErrorAPI