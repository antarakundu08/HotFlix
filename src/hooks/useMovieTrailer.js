import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieID) => {
    const dispatch = useDispatch()
    const getMovieTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieID+'/videos?language=en-US', API_OPTIONS)
        const movieData = await data.json()
        const filterData = movieData?.results.filter((data) => data.type === 'Trailer');
        const trailer = filterData ? filterData[0] : movieData[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(() => {
        getMovieTrailer();
    }, [])
}

export default useMovieTrailer;