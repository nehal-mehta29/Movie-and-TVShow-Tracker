import { createContext, useContext, useState } from "react";
import { addToast, removeToast } from "../components/Toast";
import { ToastContainer } from "react-toastify";

//To create a new context for watchlist
const WatchlistContext = createContext();

//Custom hook for using watchlist context easily
export const useWatchlist = () => useContext(WatchlistContext);

export const WatchlistProvider = ({ children }) => {

    //Intializing watchlist from the localstorage
    const [watchlist, setWatchlist] = useState(() => {
        const saved = localStorage.getItem("watchlist");
        return saved ? JSON.parse(saved) : [];
    });

    //Add movie/Tv shown to watchlist
    const addToWatchlist = (item) => {

        //To prevent duplicates
        if (!watchlist.find((i) => i.id === item.id)){
            const updated = [...watchlist, item];
            setWatchlist(updated);

            //Saving to local storage
            localStorage.setItem("watchlist", JSON.stringify(updated));

            //To add Toast notification with 'Added to watchlist' message
            addToast(item.title || item.name);
        }
    };

    //Remove a movie/show from watchlist 
    const removeFromWatchlist = (id) => {
        const foundItem = watchlist.find((i) => i.id === id);

        //To filter the removed items
        const updated = watchlist.filter((i) => i.id !== id);
        setWatchlist(updated);

        //To store the updates in local storage
        localStorage.setItem("watchlist", JSON.stringify(updated));
        
        //Toast notification with 'Removed from watchlist' message
        if (foundItem) removeToast(foundItem.title || foundItem.name);
    };

    return(
        <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
            {children}

            {/*Container for Toast notificatio */}
            <ToastContainer/>
        </WatchlistContext.Provider>
    );
}