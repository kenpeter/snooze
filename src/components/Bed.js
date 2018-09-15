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
  		//console.log(rowData, tableData[rowIndex]);
		this.props.history.push('/single')
	}

	getDefinedProp = (data) => {
		let buf=[];
		for(let i=0; i<data.length; i++) {
			let item = data[i];

			let obj = {};
			obj.id = item.id;
			obj.title = item.title;
			obj.sku = item.sku;
			buf.push(obj);
		}

		return buf;
	}

	renderData() {
		let data = this.props.bedList;
		//data = this.getDefinedProp(data);

		return (
			<div>
        		<SmartDataTable
    				data={data}
    				name='data-table'
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
