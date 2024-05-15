import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_API_URL } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=>store.movie.topRatedMovies)

    const getNowPlayingMovies = async () => {
        const data = await fetch(TOP_RATED_API_URL, API_OPTIONS)
        const movies = await data.json();
        dispatch(addTopRatedMovies(movies.results));
    }
    useEffect(() => {
        if(!topRatedMovies) getNowPlayingMovies();
    }, [])
}

export default useTopRatedMovies;