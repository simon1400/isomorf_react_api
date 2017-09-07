import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function (initialState = {}) {
	return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

/*import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers/counterReducers';

export default function (initialState = {}) {
	const rootReducer = combineReducers({
		counter: counterReducer
	});

	return createStore(rootReducer, initialState, applyMiddleware(thunk));
}*/