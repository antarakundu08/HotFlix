import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_API_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(MOVIE_API_URL, API_OPTIONS)
        const movies = await data.json();
        console.log(movies);
        dispatch(addNowPlayingMovies(movies.results));
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;