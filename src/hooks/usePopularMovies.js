import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_API_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movie.popularMovies)

    const getNowPlayingMovies = async () => {
        const data = await fetch(POPULAR_API_URL, API_OPTIONS)
        const movies = await data.json();
        dispatch(addPopularMovies(movies.results));
    }
    useEffect(() => {
        if(!popularMovies) getNowPlayingMovies();
    }, [])
}

export default usePopularMovies;