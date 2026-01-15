/*================== Watchlist Page ==================*/

import MovieCard from "../components/MovieCard";
import { useWatchlist } from "../context/WatchlistContext";
import "../styles/Watchlist.css";

export default function Watchlist(){

    //To Access watchlist data and function to remove items
    const { watchlist, removeFromWatchlist } = useWatchlist();

    //To display a message if watchlist is empty
    if (watchlist.length === 0)
        return(
            <div className="flex flex-col items-center justify-center min-h-[70vh] text-gray-300 text-lg">
                <p>Your Watchlist is empty.</p>
            </div>
        )

    return(
        <div className="px-6 py-10 min-h-screen">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Your Watchlist
            </h1>

            <div className="grid gap-8 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                {watchlist.map((item) => (
                    <div key={item.id} style={{position: "relative"}}>
                        <MovieCard
                            id={item.id}
                            type={item.title ? "movie" : "tv"}
                            title={item.title || item.name}
                            poster_path={item.poster_path}
                            release_date={item.release_date}
                            rating={item.vote_average}
                        />
                        <button 
                            onClick={() => removeFromWatchlist(item.id)}
                            className="remove-button"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}