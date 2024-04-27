import React from 'react'
import { useState } from 'react'
import Header from './Header'
import { formValidation } from '../utils/validation'
import { useRef } from 'react'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Login = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [erroMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setLoggedIn(!isLoggedIn);
  }

  const handleSubmitButton = () => {

    const message = formValidation(email.current.value, password.current.value);

    setErrorMessage(message)

    if (message) return;
    
    if(isLoggedIn){
      createUserWithEmailAndPassword(auth, 
        email.current.value, 
        password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: "https://avatars.githubusercontent.com/u/61645954?v=4"
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid, 
                  email: email, 
                  displayName: displayName, 
                  photoURL: photoURL,
                })
              );
              navigate("/browse")
          // Profile updated!
          // ...
        }).catch((error) => {
          setErrorMessage(error.message)
          // An error occurred
          // ...
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ ": "+errorMessage);
        // ..
      });
    } else {
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
        )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        const {uid, email, displayName, photoURL} = userCredential.user;
        console.log(uid, email, displayName, photoURL)
              dispatch(
                addUser({
                  uid: uid, 
                  email: email, 
                  displayName: displayName, 
                  photoURL: photoURL,
                })
              );
        navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ ": "+errorMessage);
      });
    }

  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt='logo' />
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='bg-black p-12 max-w-sm mx-auto relative top-24 bg-opacity-80 z-10'>
            <div className='px-3 mx-3 text-white font-bold text-2xl'>{isLoggedIn? "Sign Up" : "Sign In"}</div>
            {isLoggedIn && 
            <input 
              ref={name}
              type="text" 
              placeholder="Full Name" 
              className='p-3 m-3 rounded-sm w-full text-white bg-transparent border-white border' 
            />}
            <input 
              ref = {email}
              type="text" 
              placeholder="Email or Phone Number" 
              className='p-3 m-3 rounded-sm w-full text-white bg-transparent border-white border' 
            />
            <input 
              ref={password}
              type="password" 
              placeholder="Password" 
              className='p-3 m-3 rounded-sm w-full text-white bg-transparent border-white border' 
            />
            <p className='text-red-500 font-semibold px-3'>{erroMessage}</p>
            <button 
              className='bg-red-700 text-white p-3 m-3 rounded-sm w-full'
              onClick={handleSubmitButton}>
                {isLoggedIn? "Sign Up" : "Sign In"}
            </button>
            <div className='text-white cursor-pointer px-3 mx-3 ' onClick={toggleSignInForm}>{isLoggedIn? "Already Registered? Sign In here." : "New to Netflix? Sign up now."}</div>
        </form>
    </div>
  )
}

export default Login