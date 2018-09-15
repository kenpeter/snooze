import initialState from './initialState';
import {
  BED_LIST
} from '../actions/actionTypes';

export default function bedList(state = initialState.bedList, action) {
	switch (action.type) {
    	case BED_LIST:
      		return action.bedList;
    	default:
      	return state;
  	}
}
