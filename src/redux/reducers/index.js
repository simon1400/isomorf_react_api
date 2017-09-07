import { combineReducers } from 'redux';
import counterReducer from './counterReducers';
import timeReducer from './timeReducer';

export default combineReducers({
	counter: counterReducer,
	time: timeReducer
});