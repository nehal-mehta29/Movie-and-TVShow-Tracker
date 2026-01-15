/*================== Popular TV shows page ==================*/

import { useEffect, useState } from "react";
import { getPopularTVShows } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

export default function TVShow(){

    //State to store popular Tv shows
    const [show, setShow] = useState([]);

    //To fetch popular tv shows from TMDB API
    useEffect(() => {
        getPopularTVShows().then(setShow);
    },[])

    return(
        <div className="px-6 py-10 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Popular TV Shows
            </h1>

            <div className="grid gap-8 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {show.map((show) => (
                    <MovieCard
                        key={show.id}
                        id={show.id}
                        type="tv"
                        title={show.name}
                        poster_path={show.poster_path}
                        rating={show.vote_average}
                    />
                ))}
            </div>
        </div>
    )
}