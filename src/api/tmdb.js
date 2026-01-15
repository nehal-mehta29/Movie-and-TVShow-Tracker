/*Handles all the API requests to The Movie Database (TMDB) */

import axios from "axios";

//TMDB API key and base URL
export const API_KEY = "09d697a70186249d09ab86c97c90fba3";
export const BASE_URL = "https://api.themoviedb.org/3";

//To get popular movies
export const getPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular`,{
        params:{
            api_key: API_KEY,
            region: "us",
        },
    })

    //To return array of popular movies
    return response.data.results;
}

//To get popular TV shows
export const getPopularTVShows = async () => {
    const response = await axios.get(`${BASE_URL}/tv/popular`,{
        params:{
            api_key: API_KEY,
            region: "us",
        },
    })

    //To return array of popular TV shows
    return response.data.results;
}

//To search movies or TV shows
export const searchTMDB = async (query) => {
    const response = await axios.get(`${BASE_URL}/search/multi`,{
        params:{
            api_key: API_KEY,
            query: query,
        },
    })

    //To return search results
    return response.data.results;
};

//Get full details for movie/Tv show
export const getDetails = async (id, type) => {
  const response = await axios.get(`${BASE_URL}/${type}/${id}`, {
    params: { 
        api_key: API_KEY, 
        language: "en-US" 
    },
  });

  //To return details
  return response.data;
};

//Get cast details for movie/Tv shows
export const getCast = async (id, type) => {
  const response = await axios.get(`${BASE_URL}/${type}/${id}/credits`, {
    params: { 
        api_key: API_KEY, 
        language: "en-US" 
    },
  });

  //To return array of cast members
  return response.data.cast;
};