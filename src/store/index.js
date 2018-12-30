import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { appReducer } from '../containers/App/reducers';

const combinedReducers = combineReducers({
	app: appReducer
});

const middleware = [thunk];

const store = createStore(
	combinedReducers,
	composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
