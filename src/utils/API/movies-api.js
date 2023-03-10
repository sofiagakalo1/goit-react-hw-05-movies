import axios from 'axios';  

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: '8b3b87955e63e3e9950b3cf9b384a483',
    }
})

export async function getTrendingMovies(){
    const query = '/trending/movie/day?';
        const response  = await instance.get(query);
        return response;
    }

    export async function getMovieDetailsById(movieId){
        const query = `/movie/${movieId}?`;
        const response = await instance.get(query);
        return response;
    }

    export async function getMoviesBySearch(search){
        const query = `/search/movie?query=${search}`;
        const response = await instance.get(query);
        return response;
    }

    export async function getMovieCast(movieId){
        const query = `/movie/${movieId}/credits?`;
        const response = await instance.get(query);
        return response;
    }

    export async function getMovieReviews(movieId){
        const query = `/movie/${movieId}/reviews?`;
        const response = await instance.get(query);
        return response;
    }