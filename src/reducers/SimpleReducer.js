// export
// default
// state and action
export default (state = {}, action) => {
	// which action
	switch (action.type) {
		case 'SIMPLE_ACTION':
			// action.type vs action.playload
			return {
    			result: action.payload
   			}
  		default:
			// default state
   			return state;
	}
}
