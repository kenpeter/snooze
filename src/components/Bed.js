// connect
import {connect} from 'react-redux';

// bind action
import {bindActionCreators} from 'redux';

// page table
import SmartDataTable from 'react-smart-data-table';

// action has many sub actions
import * as bedAction from '../actions/bedList';

// react
import React from 'react';

// css
import './Bed.css';

class Bed extends React.Component {
	componentWillMount() {
    	// mount, use sub action
    	this.props.bedAction.bedList();
	}

	onRowClick = (event, { rowData, rowIndex, tableData }) => {
  		// The following results should be identical
  		console.log(rowData, tableData[rowIndex])
	}

	renderData() {
		let data = this.props.bedList;

		return (
			<div>
        		<SmartDataTable
    				data={data}
    				name='test-table'
    				className='ui compact selectable table'
    				sortable
					perPage={100}
					onRowClick={this.onRowClick}
  				/>	
			</div>
		);

	}

	render() {
    	let output;
 
    	// data here
    	if(this.props.bedList.length !== 0) {
      		// call display
      		output = this.renderData();
    	} else {
      		output = (
        		<div>
          			<h3>loading....</h3>
        		</div>
      		);
    	}
    
    	return (
      		<div className="">
        		<h3>Header</h3>
        		{output}
				<p>Footer</p>
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
