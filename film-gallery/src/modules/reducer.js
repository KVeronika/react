import { combineReducers } from 'redux';

import { filmsReducer } from './Films/reducer';

const mainReducer = combineReducers({
    filmsReducer
});

export { mainReducer };
