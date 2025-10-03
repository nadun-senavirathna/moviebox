import "../css/Watchlist.css";
import { useWatchlistContext } from "../context/WatchlistContext";
import FilmCard from "../Components/FilmCard";

function Watchlist() {
  const { watchlist, clearWatchlist } = useWatchlistContext();

  if (watchlist.length > 0) {
    return (
      <div className="watchlist">
        <h2>Your Watchlist</h2>
        <button className="clear-btn" onClick={clearWatchlist}>Clear All</button>
        <div className="movies-grid">
          {watchlist.map((movie) => (
            <FilmCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="watchlist-empty">
      <h2>No Movies in Watchlist</h2>
      <p>Start adding movies to your collection 🎬</p>
    </div>
  );
}

export default Watchlist;
