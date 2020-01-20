import { combineReducers } from 'redux';
import cardReducer from './cardReducer';
import postReducer from './postReducer';

export default combineReducers({
    card: cardReducer,
    post: postReducer
})