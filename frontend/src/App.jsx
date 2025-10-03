import './css/App.css';
import FilmCard from './Components/FilmCard';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Watchlist from "./Pages/Watchlist";
import { WatchlistProvider } from './context/WatchlistContext';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <WatchlistProvider>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </main>
    </WatchlistProvider>
  );  
}

export default App;
