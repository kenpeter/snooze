// create store
// middle ware, redux
import { createStore, applyMiddleware } from 'redux';

// thunk, fuc
import thunk from 'redux-thunk';

// root reducer
import rootReducer from './reducers/RootReducer';

// export default func
// config store
export default function configureStore(initialState={}) {
	// return create store
	// root reducer
	// thunk
	return createStore(
  		rootReducer,
   		applyMiddleware(thunk)
 	);
}
