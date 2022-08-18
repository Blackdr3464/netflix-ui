import { combineReducers } from 'redux';
import filmReducer from './film';
import memberReducer from './member';

const rootReducer = combineReducers({
    member: memberReducer,
    film: filmReducer,
});

export default rootReducer;
