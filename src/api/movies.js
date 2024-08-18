import axios from 'axios';
import { setMovies, setGenres } from '../slice/movieSlice/movieSlice';

const BaseURL = "https://movie-search-app-server.onrender.com/api/movies";
let value1 = "";
let value2 = 1;

export const getMovies = () => async dispatch => {
    try {
        const {data} = await axios.get(BaseURL);
        dispatch(setMovies(data))
        return data
    }catch(err){
        return err
    }
}

export const getMoviesBySearch = (value) => async dispatch => {
    const url = BaseURL + '/search';
    try {
        const {data} = await axios.get(url,{
            params: {
                search: value
            }
        });
        dispatch(setMovies(data));
    }catch(err){
        return err
    }
}

export const getAllGenres = () => async dispatch => {
    const url = BaseURL + '/genres';
    try {
        const {data} = await axios.get(url);
        dispatch(setGenres(data));
    }catch(err){
        return err
    }
}


export const getMoviesByfilter = (value) => async dispatch => {

    if (value.includes("genre")){
        let index = value.search(":");
        value1 = value.slice(index+1);
    } else{
        let index =  value.search(":");
        value2 = value.slice(index+1);
    }

    const url = BaseURL + '/filter';

    try {
        const {data} = await axios.get(url,{
            params: {
                genre: value1,
                rating: value2
            }
        });
        dispatch(setMovies(data));
    }catch(err){
        return err
    }
}
