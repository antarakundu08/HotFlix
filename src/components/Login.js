import React from 'react'
import { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleSignInForm = () => {
    setLoggedIn(!isLoggedIn);
  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='logo' />
        </div>
        <form className='bg-black p-12 max-w-sm mx-auto relative top-24 bg-opacity-80 z-10'>
            <div className='px-3 mx-3 text-white font-bold text-2xl'>{isLoggedIn? "Sign Up" : "Sign In"}</div>
            <input type="text" placeholder="Email or Phone Number" className='p-3 m-3 rounded-sm w-full text-white bg-transparent border-white border' />
            <input type="password" placeholder="Password" className='p-3 m-3 rounded-sm w-full text-white bg-transparent border-white border' />
            <button className='bg-red-700 text-white p-3 m-3 rounded-sm w-full'>Sign In</button>
            <div className='text-white cursor-pointer px-3 mx-3 ' onClick={toggleSignInForm}>{isLoggedIn? "Already Registered? Sign In here." : "New to Netflix? Sign up now."}</div>
        </form>
    </div>
  )
}

export default Login