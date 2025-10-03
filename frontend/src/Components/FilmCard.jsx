import "../css/FilmCard.css";
import { useWatchlistContext } from "../context/WatchlistContext";

function FilmCard({ movie }) {
  const { isInWatchlist, addToWatchlist, removeFromWatchlist } = useWatchlistContext();
  const saved = isInWatchlist(movie.id);

  function handleWatchlistClick(e) {
    e.preventDefault();
    if (saved) removeFromWatchlist(movie.id);
    else addToWatchlist(movie);
  }

  return (
    <div className="film-card">
      <div className="film-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="film-overlay">
          <button
            className={`watchlist-btn ${saved ? "active" : ""}`}
            onClick={handleWatchlistClick}
          >
            {saved ? "✓" : "＋"}
          </button>
        </div>
      </div>

      <div className="film-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
        <p className="rating">⭐ {movie.vote_average.toFixed(1)}</p>
        <p className="overview">{movie.overview?.slice(0, 60)}...</p>
      </div>
    </div>
  );
}

export default FilmCard;
