import axios from 'axios';

import { processFilms } from '../helpers/processFilms';

const API = {};
const instance = axios.create({
    baseURL: 'http://api.tvmaze.com'
});

API.getFilms = (query) => {
    return instance.get('/search/shows?', {
        params: {
            q: query
        }
    })
        .then((response) => processFilms(response.data));
};

// API.getFilmById = (id) => {
// }

export { API };
