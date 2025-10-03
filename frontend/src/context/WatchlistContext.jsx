import { createContext, useContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export const useWatchlistContext = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("watchlist");
    if (stored) setWatchlist(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    setWatchlist((prev) => [...prev, movie]);
  };

  const removeFromWatchlist = (movieID) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== movieID));
  };

  const isInWatchlist = (movieID) => {
    return watchlist.some((movie) => movie.id === movieID);
  };

  const clearWatchlist = () => setWatchlist([]);

  const value = {
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    clearWatchlist,
  };

  return (
    <WatchlistContext.Provider value={value}>
      {children}
    </WatchlistContext.Provider>
  );
};
