/*======================== Toast Notification ========================*/

import { toast } from "react-toastify"

// Toast for adding to watchlist
export const addToast = (title) => {
    toast.success(`Added to Watchlist`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    });
};

// Toast for removing from watchlist
export const removeToast = (title) => {
  toast.error(`Removed from Watchlist`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  });
}