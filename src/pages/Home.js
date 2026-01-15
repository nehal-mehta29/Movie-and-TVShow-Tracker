/*============================ Home Page ============================ */

import { useEffect, useState } from "react";
import { getPopularMovies, getPopularTVShows } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import "../styles/Home.css";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home(){

    //State variables for error, popular movies & tv shows and loading
    const [error, setError] = useState(null);
    const [popularMovies, setPopularMovies] = useState([]);
    const [popularTV, setPopularTV] = useState([]);
    const [loading, setLoading] = useState(true);

    //To Fetch all the trending movies/tvshows
    useEffect(() => {
        const fetchData = async () => {
            try{
                const moviesData = await getPopularMovies();
                const tvData = await getPopularTVShows();

                //To display popular movies
                setPopularMovies(moviesData.slice(0,10));

                //To display popular TV shows
                setPopularTV(tvData.slice(0,10));
            }

            catch(err){
                setError("Please try again....");
            }

            finally{
                setLoading(false);
            }
        };
        fetchData();
    },[]);

    //To show loading spinner while fetching
    if (loading) return <LoadingSpinner/>;

    //To show error message 
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return(
        <>
            {/*Welcome message */}
            <div className="welcome-message">
                <h1>Welcome to Movie & TV Show Tracker !!!</h1>
                <p>Your Ultimate Entertainment Companion !!</p>
            </div>

            {/*Search Bar section */}
            <div style={{ marginBottom: "40px" }}>
                <SearchBar />
            </div>

            {/* Popular Movies Section */}
            <section className="home-section">
                <h2>Popular Movies</h2>
                <div className="home-scroll">
                    {popularMovies.map((movie) => (
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
            </section>

            {/* Popular TV Shows Section */}
            <section className="home-section">
                <h2>Popular TV Shows</h2>
                <div className="home-scroll">
                    {popularTV.map((show) => (
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
            </section>

            {/*Footer */}
            <footer className="footer">
                © 2025 Movie & TV Show Tracker | Nehal Mehta
            </footer>
        </>
    )
}
