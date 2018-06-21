import * as actionTypes from './actions';

export const filmsReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.fetchFilmsStart:
            return { ...state, isFetching: true };
        case actionTypes.fetchFilmsSuccess:
            return { ...state, films: action.filmList };
        case actionTypes.fetchFilmsFail:
            return { ...state, error: action.error };
        default:
            return state;
    }
};
