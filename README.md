# Movie & TV Show Tracker

A **responsive web app** built with **React.js** that allows users to **search, explore, and manage** their favorite movies and TV shows using data from **The Movie Database (TMDb)** API.

---

## Features

- **Real-time Search** - Find movies and TV shows instantly using TMDb API  
- **Detailed Info Pages** - View cast, ratings, release date, and synopsis  
- **Watchlist System** - Add or remove items from your personal list  
- **Modern Dark Theme** - Elegant and responsive design across all devices  
- **Loading Spinner & Toast Notifications** - Smooth user interactions  
- **React Router Integration** - Seamless navigation between pages  
- **LocalStorage Persistence** - Watchlist stays saved even after reload  
- **Responsive** - Fully responsive design across all devices

---

## Tech Stack

- **Frontend Framework**: React.js
- **Styling**: Tailwind CSS + CSS3
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Notifications**: React Toastify
- **Data Source**: The Movie Database (TMDb) API
- **HTTP Client**: Axios

---

## Logo
The app logo was created using **Banana by Google Gemini**, a generative AI tool for creating creative visuals.

---

## File Overview

**scr/api/tmdb.js**
Handles all API requests to TMDb including fetching popular movies, TV shows, search results, and detailed information.

**src/components/**
- LoadingSpinner.js – Displays a loading spinner while fetching data.
- MovieCard.js – Shows a card for movies/TV shows with image, title, release date, and rating.
- Navbar.js – Navigation bar with links to Home, Movies, TV Shows, and Watchlist.
- SearchBar.js – Handles search input, fetches results, and displays them in a grid.
- Toast.js – Shows toast notifications for actions like adding/removing items from the watchlist.

**src/context/WatchlistContext.js**
Provides global state management for the watchlist and toast messages, allowing easy access throughout the app.

**src/pages/**
- Home.js – Displays popular movies and TV shows along with the search bar.
- Details.js – Shows detailed information about a selected movie or TV show, including cast and watchlist button.
- Movies.js – Lists popular movies.
- TVShows.js – Lists popular TV shows.
- Watchlist.js – Displays the user's watchlist with remove functionality.

**src/styles/**
Contains CSS files for modular styling of components and pages:

- Details.css – Styling for the details page
- Home.css – Styling for homepage and scroll sections
- MovieCard.css – Styling for movie/TV show cards
- Navbar.css – Navigation bar styling
- SearchBar.css – Styling for the search input and results
- Watchlist.css – Styling for watchlist page and remove button

**src/App.css** 
General layout and typography

**src/App.js**
The root component that wraps the app in Router and WatchlistProvider, defines all routes, and includes the ToastContainer.

---

## How to Run Locally

Follow these steps to run the Movie & TV Show Tracker on your local machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nehal-mehta29 Movie-and-TVShow-Tracker.git

2. **Navigate to the project folder:**
   ```bash 
   cd Movie-and-TVShow-Tracker

3. **Install dependencies:**
    ```bash
    npm install

4. **Set up your TMDb API key:**
    - Create a .env file in the root directory.
    - Add the following line (replace YOUR_API_KEY with your TMDb API key):
    ```env
    REACT_APP_TMDB_API_KEY=YOUR_API_KEY

5. **Start the development server:**
    ```bash 
    npm start
The app will open automatically in your default browser at http://localhost:3000.

---

## Author

**Nehal Mehta**  
GitHub: [https://github.com/nehal-mehta29](https://github.com/nehal-mehta29)
