import React from 'react'

const ErrorBox = () => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <div className="bg-red-800 p-4 w-full md:w-1/2 rounded-lg mx-8">
            <p className='flex flex-wrap text-white font-semibold text-center'>You are seeing this page as the TMDB API does not work on Jio Networks, try switching the network to any other operator. Thank You!</p>
        </div>
    </div>

  )
}

export default ErrorBox