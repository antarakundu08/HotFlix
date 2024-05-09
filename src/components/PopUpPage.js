import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'reactjs-popup/dist/index.css';
import { addGPTKey } from '../utils/gptSlice';

const PopUpPage = ({onClose}) => {

  const dispatch = useDispatch()
  const gptKeyValue = useRef(null)
  const currentkey = useSelector(store => store.gpt.gptKey)

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const handleGPTKeyClick = () => {
    dispatch(addGPTKey(gptKeyValue.current.value));
    onClose();
  }
  
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-black p-4 w-full md:w-1/2 rounded">
        <div className="flex flex-col">
          <input
            ref={gptKeyValue}
            type="text"
            className="p-2 rounded mb-5 text-center"
            placeholder="Enter your GPT/ OpenAI key here"
          />
          <p className="rounded mb-5 text-center text-blue-200"> {currentkey? "Current GPT key set is: "+currentkey: "No key is set, please enter your key!"}</p>
        </div>
        <div className="text-center">
          <button className="px-5 py-2 bg-red-800 text-white rounded"
            onClick={handleGPTKeyClick}>
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default PopUpPage