import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Watchlist from "./pages/Watchlist";
import { WatchlistProvider } from "./context/WatchlistContext";
import Movie from "./pages/Movies";
import TVShow from "./pages/TvShow";
import { ToastContainer } from "react-toastify";

export default function App(){
  return(
    <WatchlistProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movie/>}/>
          <Route path="/tv-shows" element={<TVShow/>}/>
          <Route path="/details/:type/:id" element={<Details />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
        <ToastContainer/>
    </Router>
    </WatchlistProvider>
  )
}