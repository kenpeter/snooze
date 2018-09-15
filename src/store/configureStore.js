// store, middle ware
import {createStore, compose, applyMiddleware} from 'redux';
// root reducer
import rootReducer from '../reducers/rootReducer';
// async
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router'

// export func
export default function configureStore(history) {
	let initialState = {};

	return createStore(
		connectRouter(history)(rootReducer),
		initialState,
		compose(
    		applyMiddleware(
				thunk,
      			routerMiddleware(history)
    		)
  		)
  	);
}
