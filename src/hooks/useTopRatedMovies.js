import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, TOP_RATED_API_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(TOP_RATED_API_URL, API_OPTIONS)
        const movies = await data.json();
        dispatch(addTopRatedMovies(movies.results));
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useTopRatedMovies;