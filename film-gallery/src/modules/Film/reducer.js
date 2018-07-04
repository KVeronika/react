import * as actionTypes from './constants';

export const film = (state = { isFetching: false, film: {} }, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FILM_STARTED:
            return { ...state, isFetching: true };
        case actionTypes.FETCH_FILM_SUCCEEDED:
            return { ...state, film: action.film, isFetching: false };
        case actionTypes.FETCH_FILM_FAILED:
            return { ...state, error: action.error, isFetching: false };
        default:
            return state;
    }
};
