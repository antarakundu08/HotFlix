import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_API_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store => store.movie.upcomingMovies)

    const getNowPlayingMovies = async () => {
        const data = await fetch(UPCOMING_API_URL, API_OPTIONS)
        const movies = await data.json();
        dispatch(addUpcomingMovies(movies.results));
    }
    useEffect(() => {
        if(!upcomingMovies) getNowPlayingMovies();
    }, [])
}

export default useUpcomingMovies;