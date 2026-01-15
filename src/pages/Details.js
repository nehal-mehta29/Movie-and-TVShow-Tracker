/*============================ Details Page ============================*/

import { useLocation, useParams } from "react-router-dom";
import { useWatchlist } from "../context/WatchlistContext";
import "../styles/Details.css";
import { useEffect, useState } from "react";
import { getCast, getDetails } from "../api/tmdb";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Details(){

    //To get id and type 
    const { id,type } = useParams();
    const{ state } = useLocation();

    //State variable for item details and cast
    const [item, setItem] = useState(null);
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(true);
    
    //To access watchlist context
    const { watchlist, addToWatchlist, removeFromWatchlist } = useWatchlist();

    //To check if the item is already in watchlist or not
    const isInWatchlist = watchlist.some((w) => w.id == parseInt(id)); 

    //To fetch movie/tv shows details from TMDB
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const actualType = type || state?.item?.media_type || "movie"; 

                //To fetch data from TMDB API
                const detailsData = await getDetails(id, type);
                const castData = await getCast(id, type);

                setItem(detailsData);
                setCast(castData); 
            } 

            catch (error) {
                console.error("Please try again....", error);
            } 

            finally {
                setLoading(false);
            }
        };

       fetchDetails();
    }, [id,type,state]);

    //To display loading spinner while fetching
    if (loading) return <LoadingSpinner/>;

    //To display message if no details found
    if (!item) return <p className="detail-message">Details not found</p>

    // Generate image URL
    const imgUrl = item.poster_path
        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
        : "https://via.placeholder.com/300x450?text=No+Image";

    return(
        <div className="detail-card">

            {/* Title */}
            <h1>{item.title || item.name}</h1>

            {/* Poster */}
            <img
                src={imgUrl}
                alt={item.title || item.name}
                className="detail-poster"
            />

            {/* Add/Remove from Watchlist Button */}
            <button
                className="button"
                onClick={() => {
                    if (isInWatchlist) removeFromWatchlist(item.id);
                    else
                        addToWatchlist({
                            id: item.id,
                            title: item.title || item.name,
                            poster_path: item.poster_path,
                            release_date: item.release_date || item.first_air_date,
                            rating: item.vote_average,
                            type: item.media_type || "movie",
                        });
                }}
            >
                {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
            </button>

            {/* Display release date */}
            {item.release_date && (
                <p>
                    <strong>Release Date : </strong> {item.release_date}
                    </p>)
            }

            {/* Display rating if available */}
            {item.vote_average && (
                <p>
                    <strong>Rating :</strong> {item.vote_average?.toFixed(1) || "N/A"}</p>
            )}

            {/*Display genre */}
            {item.genres && item.genres.length > 0 && (
                <p>
                    <strong>Genres :</strong> {item.genres.map((g) => g.name).join(", ")}
                </p>
            )}

            {/* Movie/TV show overview */}
            <p style={{ marginTop: "20px" }}>{item.overview || "No overview available."}</p>

            {/* Cast */}
            {cast.length > 0 && (
                <div style={{ marginTop: "20px" }}>
                    <h3>Cast</h3>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                        {cast.map(member => (
                            <li key={member.id}>
                                {member.name} as {member.character}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>
    )
}