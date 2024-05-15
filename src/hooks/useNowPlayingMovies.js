import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeStateMovieLoaded } from "../utils/configSlice";
import { API_OPTIONS, NOW_PLAYING_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_API_URL, API_OPTIONS)
        const movies = await data.json();
        dispatch(addNowPlayingMovies(movies.results));
        dispatch(changeStateMovieLoaded())
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;