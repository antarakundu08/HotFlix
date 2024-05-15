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
          // An error occurred
          // ...
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use"){
          setErrorMessage("Email already in use")
        }
        else setErrorMessage(errorCode+ ": "+errorMessage);
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
        const {uid, email, displayName, photoURL} = userCredential.user;
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
        if(errorCode === "auth/invalid-credential"){
          setErrorMessage("Email or Password is incorrect.")
      }
      else{
          setErrorMessage(errorCode + " - " + errorMessage)
      }
      });
    }

  }

  return (
    <div>
        <Header />
        <div className="absolute">
            <img src= {BG_IMG}
            alt='logo'
            className="h-screen object-cover md:object-none md:h-max" />
        </div>
        <form onSubmit={(e) => e.preventDefault()} 
        className="w-full md:w-1/3 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
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
            <div className="flex items-center justify-between px-2 mx-2 w-full text-xs font-light text-gray-400">
                    <span>
                        <input className="bg-gray-800 accent-gray-400" type="checkbox" value="remember" /> Remember me</span>
                    <span className="cursor-pointer hover:text-gray-50">Need Help?</span>
                </div>
                <div className="w-full py-4 px-2 mx-2 font-light text-left text-md">
                    <span className="text-gray-400">{isLoggedIn ? "Already a member?" : "New to Netflix?" }  </span><span onClick={toggleSignInForm} className="text-white cursor-pointer hover:text-gray-400">{isLoggedIn ? "Sign In" : "Sign Up"} now.</span>
                </div>
                <div className="py-2 px-2 mx-2 text-xs font-light text-gray-400">
                    <span>This is not the real Netflix. It's a clone developed by Antara Kundu to learn how Netflix frontend works and is intended to show off his development skills.</span>
                </div>
        </form>
    </div>
  )
}

export default Login