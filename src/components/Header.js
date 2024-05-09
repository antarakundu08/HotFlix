import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import PopUpPage from './PopUpPage';



const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userStore, setUserStore] = useState(null)
  const [popUpToggle, setPopUpToggle] = useState(false)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          setUserStore(user);
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
        } else {
          dispatch(removeUser());
          navigate("/");
        }
      });
      
      return () => unsubscribe();
}, [])

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  }
  
  const handleClosePopUp = () => {
    setPopUpToggle(false)
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 md:flex justify-between'>
        <img className="w-44 mx-auto md:mx-0" src={LOGO}
                alt='logo' />
        { userStore && (<div className='flex justify-between'>
         {showGptSearch &&
         <button
         className='my-4 mx-1 px-2 py-2 bg-red-800 text-white rounded-lg font-semibold'
         onClick={() => {setPopUpToggle(true);
          console.log(popUpToggle)}}>
         Add Key
       </button>
          }
                
          <button 
            className='m-4 mx-1 px-2 py-2 bg-red-800 text-white rounded-lg font-semibold'
            onClick={handleGPTSearch}>
              {showGptSearch? "Home Page": "GPT Search" }
          </button>
          <div className='flex'>
          <img 
          className='w-9 h-9 m-4'
          src={userStore?.photoURL}
          alt='usericon' />
          <button className='font-bold text-white' onClick={handleSignOut}> Sign Out </button>
          </div>
          
        </div>)}
       {popUpToggle && <PopUpPage onClose={handleClosePopUp}/>}
    </div>
  )
}

export default Header;