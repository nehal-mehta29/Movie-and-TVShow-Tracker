/*============================== Search Bar ==============================*/

import { useEffect, useState } from "react";
import { searchTMDB } from "../api/tmdb";
import LoadingSpinner from "../components/LoadingSpinner";
import MovieCard from "../components/MovieCard";
import "../styles/SearchBar.css";

export default function SearchBar(){

    //State for search input, result and loading status
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    //To trigger search whenever query changes
    useEffect(() => {

        //To clear the result if the search bar is empty
        if (query.trim() === ""){
            setResults([]);
            return;
        }

        //To fetch results from TMDB API
        const fetchResults = async () => {

            //Setting loading state as true while fetching
            setLoading(true);

            try{
                //To search for movies and tv shows 
                const[movies,tvShows] = await Promise.all([
                    searchTMDB(query, "movies"),
                    searchTMDB(query, "tv"),
                ]);

                //To add 'type' to identify the content type (movie or tvshow)
                const movieWithType = movies.map((item) => ({...item, type:"movies"}))
                const tvWithType = tvShows.map((item) => ({...item, type: "tv"}));

                //To store the results 
                setResults([...movieWithType, ...tvWithType]);
            }

            catch(error){
                console.error("Please try again....", error);

                //To clear the result on error
                setResults([]);
            }

            //Setting loading state as false if the results is fetched
            setLoading(false);
        };

        const delay = setTimeout(fetchResults, 500);
        return () => clearTimeout(delay);
    }, [query]);

    return (
        <div className="search-container">

            {/*Search Form */}
            <form className="search-form">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search for Movies or TV Shows..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
            </form>

            {/* Results */}
            {loading ? (

                //To display loading spinner while loading
                <LoadingSpinner />
            ) : (
                <div className="results-grid">
                    {results.length > 0 ? (

                        //To render the search results
                        results.map((item) => (
                            <MovieCard
                                key={item.id + item.type}
                                id={item.id}
                                type={item.type}
                                title={item.title || item.name}
                                poster_path={item.poster_path}
                                release_date={item.release_date}
                                rating={item.vote_average}
                            />
                        ))
                    ) : (
                        query.trim() !== "" && (
                            <p className="text-gray-400 text-lg">No results found.</p>
                        )
                )}
              </div>
            )}
        </div>
    );
}