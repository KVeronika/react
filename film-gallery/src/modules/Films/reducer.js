import * as actionTypes from './constants';

export const films = (state = { isFetching: false, filmList: [] }, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FILMS_STARTED:
            return { ...state, isFetching: true };
        case actionTypes.FETCH_FILMS_SUCCEEDED:
            return { ...state, filmList: action.films, isFetching: false };
        case actionTypes.FETCH_FILM_FAILED:
            return { ...state, error: action.error, isFetching: false };
        default:
            return state;
    }
};
