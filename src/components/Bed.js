// connect
import {connect} from 'react-redux';
// bind action
import {bindActionCreators} from 'redux';

// action has many sub actions
import * as bedAction from '../actions/bedList';
// react
import React from 'react';

class Bed extends React.Component {
	componentWillMount() {
    	// mount, use sub action
    	this.props.bedAction.bedList('Lagoon');
	}

	renderData() {

		console.log(this.props.bedList);

		return (
			<p>bla</p>
		);

	}

	render() {
    	let output;
 
    	// data here
    	if(this.props.bedList) {
      		// call display
      		output = this.renderData();
    	} else { 
      		output = (
        		<div>
          			loading....	
        		</div>
      		);
    	}
    
    	return (
      		<div className="">
        		<h3>bla...</h3>
        		{output}
      		</div>
    	);
  }
}


// state to prop
function mapStateToProps(state) {
	return {
    	bedList: state.bedReducer 
  	};
}

// dispatch to prop
// we have action from outside + dispatch
// we make them as prop inside
function mapDispatchToProps(dispatch) {
	return {
    	bedAction: bindActionCreators(bedAction, dispatch),
  	};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bed);
