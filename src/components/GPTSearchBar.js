import React from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import OpenAI from "openai";
import { addGptMovieResult } from '../utils/gptSlice'
import { useState } from 'react';

const GPTSearchBar = () => {

  const gptMessage = useRef(null)
  const gptkey = useSelector(store => store.gpt.gptKey)
  const dispatch = useDispatch()
  const [errorMsg, setErrorMsg] = useState(null);


  const openai = new OpenAI({
      apiKey: gptkey,
      dangerouslyAllowBrowser: true,
  });
  
  

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
     
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGPTSearch = async () => {
    
    const gptQuery = "Give me 8 movie suggestions to watch based on given query: "+ gptMessage.current.value+". Provide these suggestions in comma separated format. For example: Shaitan, Drishyam, Yeh Jawani hai Deewani, Kal ho na ho, Hum dil de chike sanam, Dhadkan, Sholey, Kashmir Files." 
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
  });
  if (!gptResults.choices) {
    // TODO: Write Error Handling
  }


  // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
  const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

  // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

  // For each movie I will search TMDB API

  // const gptMovies = ["Shaitan", "Drishyam", "Yeh Jawani hai Deewani", "Kal ho naa ho", "Hum dil de chuke sanam", "Dhadkan", "Sholey", "Kashmir Files"]

  const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
  // [Promise, Promise, Promise, Promise, Promise]

  const tmdbResults = await Promise.all(promiseArray);


  dispatch(
    addGptMovieResult({movieNames: gptMovies})
  );
  }

  handleGPTSearch().catch((e) => {
    if(e.message.includes('401') && e.message.includes('Incorrect API key provided') ){
    setErrorMsg(null);
  } else{
    setErrorMsg(e.message);
  }
    
  })

  return (
    <div >
      <div className="pt-[40%] md:pt-[10%] md:flex md:justify-center">
      <form className='w-full md:w-1/2 mt-[8%] md:mt-0 bg-black grid grid-cols-12 ' onSubmit={(e) => e.preventDefault()}>
            <input 
              ref={gptMessage}
              type='text' 
              placeholder="What's your mood? 😉"
              className="p-2 md:p-4 m-4 col-span-9"/>
            <button 
              className="col-span-3 my-4 mx-1 md:mx-3 md:m-4 disabled:cursor-no-drop py-2 px-4 font-bold bg-red-800 text-white disabled:bg-red-600 disabled:text-slate-400 rounded-lg"
              disabled={gptkey ? false : true}
              onClick={handleGPTSearch}>Search</button>

        </form>
      </div>
      <div  className="md:flex md:justify-center">
      {errorMsg && <p className='text-red-800 bg-black border-2 opacity-80 border-red-800 rounded-lg m-2 font-bold text-center md:w-1/2'>{errorMsg+"!"}</p>}
      {!gptkey && <p className='text-red-800 bg-black border-2 opacity-80 border-red-800 rounded-lg m-2 font-bold text-center px-2'>Please add your correct GPT/ OpenAI Key above!</p>}
      </div>
           

    </div>
  )
}

export default GPTSearchBar