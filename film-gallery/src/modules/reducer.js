import { combineReducers } from 'redux';

import { films } from './FilmList/reducer';
import { film } from './Film/reducer';

const mainReducer = combineReducers({
    films,
    film
});

export { mainReducer };
