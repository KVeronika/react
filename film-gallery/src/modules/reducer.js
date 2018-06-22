import { combineReducers } from 'redux';

import { films } from './Films/reducer';

const mainReducer = combineReducers({
    films
});

export { mainReducer };
