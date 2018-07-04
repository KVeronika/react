import axios from 'axios';

import { processFilmList, processFilm } from '../helpers/processFilms';

const API = {};
const instance = axios.create({
    baseURL: 'http://react-cdp-api.herokuapp.com'
});

API.getFilms = (query) => {
    return instance.get('/movies?', {
        params: {
            search: query.search,
            searchBy: query.searchBy
        }
    })
        .then((response) => processFilmList(response.data.data));
};

API.getFilmById = (id) => {
    return instance.get(`/movies/${id}`)
        .then((response) => {
            return processFilm(response.data);
        });
};

export { API };
