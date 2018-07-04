import { API } from '../../api/api';

import * as actionsTypes from './constants';

export const fetchFilmStart = () => {
    return {
        type: actionsTypes.FETCH_FILM_STARTED
    };
};

export const fetchFilmSuccess = film => {
    return {
        type: actionsTypes.FETCH_FILM_SUCCEEDED,
        film
    };
};

export const fetchFilmFail = error => {
    return {
        type: actionsTypes.FETCH_FILM_FAILED,
        error
    };
};

export const fetchFilmInfo = dispatch => id => {
    dispatch(fetchFilmStart());
    return API.getFilmById(id)
        .then(
            (response) => {
                dispatch(fetchFilmSuccess(response));
            },
            (error) => dispatch(fetchFilmFail(error))
        );
};
