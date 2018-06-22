import { API } from '../../api/api';

import * as actionsTypes from './constants';

export const fetchFilmsStart = () => {
    return {
        type: actionsTypes.FETCH_FILMS_STARTED
    };
};

export const fetchFilmsSuccess = filmList => {
    return {
        type: actionsTypes.FETCH_FILMS_SUCCEEDED,
        films: filmList
    };
};

export const fetchFilmsFail = error => {
    return {
        type: actionsTypes.FETCH_FILM_FAILED,
        error
    };
};

export const fetchFilmsList = dispatch => data => {
    dispatch(fetchFilmsStart());
    return API.getFilms(data)
        .then(
            (response) => dispatch(fetchFilmsSuccess(response)),
            (error) => dispatch(fetchFilmsFail(error))
        );
};
