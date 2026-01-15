/*======================== Popular Movies Page ========================*/

import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

export default function Movie(){

    //State to store popular movies
    const [movie, setMovies] = useState([]);

    //To fetch popular movies from TMDB API
    useEffect(() => {
        getPopularMovies().then(setMovies);
    },[])

    return(
        <div className="px-6 py-10 min-h-screen">
            
            {/*Page heading */}
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Popular Movies
            </h1>

            <div className="grid gap-8 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {movie.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        type="movie"
                        title={movie.title}
                        poster_path={movie.poster_path}
                        release_date={movie.release_date}
                        rating={movie.vote_average}
                    />
                ))}
            </div>
        </div>
    )
}