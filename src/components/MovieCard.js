/*======================= Movie Card =======================*/
/*--------- To display a single movie/tv show card ---------*/

import { Link } from "react-router-dom";
import "../styles/MovieCard.css";

const MovieCard = ({ id, title, poster_path, release_date, rating, type = "movie" }) => {

  //To set poster image URL if no image exists
  const imgUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <Link to={`/details/${type}/${id}`} 
      className="movie-card-link" 
      state={{ 
        item: {
          id,
          title,
          poster_path,
          release_date,
          rating,
          media_type: type,
        },
      }}
    >
      {/*Card container*/}
      <div className="movie-card">

        {/*Poster */}
        <img src={imgUrl} alt={title}/>

        {/*Movie/Tv show info section */}
        <div className="movie-info">
            <h3>{title}</h3>
            <p>{release_date}</p>

            {/*Movie/Tv show rating */}
            {rating && <span>Rating:  {rating.toFixed(1)}</span>}
            
            
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;