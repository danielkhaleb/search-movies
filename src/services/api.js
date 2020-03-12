import axios from 'axios';

axios.defaults.adapter = require('axios/lib/adapters/http');

const apiUrl = 'http://www.omdbapi.com';
const api = axios.create({
    baseURL: apiUrl,
    responseType: 'json',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export function getMultipleMovies(title, page) {
    return api.get(`?apikey=69cadc24&s=${title}&page=${page}`);
}

export function getSpecificMovie(title) {
    return api.get(`?apikey=69cadc24&t=${title}`);
}
