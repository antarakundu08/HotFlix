import React from 'react'
import { useState } from 'react'
import Header from './Header'
import { formValidation } from '../utils/validation'
import { useRef } from 'react'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BG_IMG, PHOTO_UTL } from '../utils/constants'

const Login = () => {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [erroMessage, setErrorMessage] = useState(null);
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
        const user = userCredential?.user;
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: PHOTO_UTL,
        }).then(() => {
          const {uid, email, displayName, photoURL} = auth?.currentUser;
          console.log(uid, email, displayName, photoURL)
              dispatch(
                addUser({
                  uid: uid, 
                  email: email, 
                  displayName: displayName, 
                  photoURL: photoURL,
                })
              )
          // Profile updated!
          // ...
        }).catch((error) => {
          setErrorMessage(error.message)
          console.log(111,error.message);
          // An error occurred
          // ...
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ ": "+errorMessage);
        console.log(222,error.message);
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
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ ": "+errorMessage);
        console.log(333,error.message);
      });
    }

  }

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src= {BG_IMG}
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

export default Login;