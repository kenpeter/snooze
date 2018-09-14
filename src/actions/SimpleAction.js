// export
// const
// action name
// fat arrow, chain
export const SimpleAction = () => dispatch => {
	// fire
	// obj, type and data
	dispatch({
		type: 'SIMPLE_ACTION',
  		payload: 'result_of_simple_action'
 	})
}
