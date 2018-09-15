// combo
import {combineReducers} from 'redux';

import bedReducer from './bedReducer';

// Combine with one reducer
const rootReducer = combineReducers({
	bedReducer
});

// Return default root reducer
export default rootReducer;

