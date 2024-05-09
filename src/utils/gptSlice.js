import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    gptKey: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      return action.payload
    },
    addGPTKey: (state, action) => {
      state.gptKey = action.payload
    }
  },
});

export const { toggleGptSearchView, addGptMovieResult, addGPTKey } = gptSlice.actions;

export default gptSlice.reducer;