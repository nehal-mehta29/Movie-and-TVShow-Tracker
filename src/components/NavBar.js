/*=================== Navigation Bar ===================*/
/*To display navigation bar with links to all the pages*/

import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import appLogo from "../logo.png";

export default function NavBar(){
    return(
        <nav className="navbar">

            {/*Header with logo*/}
            <Link to="/" className="logo-link">
                <img src={appLogo} alt="Movie Tracker Logo" className="logo-icon"/>
                <h2 className="logo-text">Movie & TV Show Tracker</h2>
            </Link>

            {/*Navigation links */}
            <ul className="nav-links">
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/movies">Movies</Link></li>
                <li><Link to = "/tv-shows">TV Shows</Link></li>
                <li><Link to = "watchlist">Watchlist</Link></li>
            </ul>
        </nav>
    )
}