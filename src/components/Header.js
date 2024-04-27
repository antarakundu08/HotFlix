import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userStore, setUserStore] = useState(null)
  

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user;
          console.log(uid, email, displayName, photoURL)
          setUserStore(user);
          dispatch(
            addUser({
              uid: uid, 
              email: email, 
              displayName: displayName, 
              photoURL: photoURL,
            })
          );
          // ...
        } else {
          dispatch(removeUser());
        }
      });
      
}, [])

  
  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-40' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt='logo' />
        { userStore && (<div className='flex'>
          <img 
          className='w-9 h-9 m-4'
          src={userStore?.photoURL}
          alt='usericon' />
          <button className='font-bold text-white' onClick={handleSignOut}> Sign Out </button>
        </div>)}
    </div>
  )
}

export default Header;