import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
    name: "config",
    initialState: {
        movieLoaded: false,
    },
    reducers: {
        changeStateMovieLoaded(state) {
            state.movieLoaded = true;
        }
    }

})

export const {changeStateMovieLoaded} = config.actions;

export default config.reducer;