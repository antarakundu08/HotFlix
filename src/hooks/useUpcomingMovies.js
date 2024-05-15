import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, UPCOMING_API_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(UPCOMING_API_URL, API_OPTIONS)
        const movies = await data.json();
        dispatch(addUpcomingMovies(movies.results));
    }
    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useUpcomingMovies;