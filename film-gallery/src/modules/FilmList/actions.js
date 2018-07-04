import { API } from '../../api/api';

import * as actionsTypes from './constants';

export const fetchFilmListStart = () => {
    return {
        type: actionsTypes.FETCH_FILM_LIST_STARTED
    };
};

export const fetchFilmListSuccess = filmList => {
    return {
        type: actionsTypes.FETCH_FILM_LIST_SUCCEEDED,
        films: filmList
    };
};

export const fetchFilmListFail = error => {
    return {
        type: actionsTypes.FETCH_FILM_LIST_FAILED,
        error
    };
};

export const fetchFilmList = dispatch => data => {
    dispatch(fetchFilmListStart());
    return API.getFilms(data)
        .then(
            (response) => dispatch(fetchFilmListSuccess(response)),
            (error) => dispatch(fetchFilmListFail(error))
        );
};
