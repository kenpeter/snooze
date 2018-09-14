

// use react, component
import React, { Component } from 'react';

// use connect
import { connect } from 'react-redux';

import { SimpleAction } from './actions/SimpleAction';

// logo
import logo from './logo.svg';

// css
import './App.css';

// class app
// extend
// component
class App extends Component {
	// display
	render() {
		// re
    	return (
      		<div className="App">
        		<header className="App-header">
          			<img src={logo} className="App-logo" alt="logo" />
          			<h1 className="App-title">Welcome to React</h1>
        		</header>
        		<p className="App-intro">
          			To get started, edit <code>src/App.js</code> and save to reload.
        		</p>

				<pre>
					{
  						JSON.stringify(this.props)
 					}
				</pre>

				<button onClick={this.simpleAction}>Test redux action</button>
      		</div>
    	);
	}

	// this calls props, created by map dispatch
	simpleAction = (event) => {
    	this.props.simpleAction();
	}

}


// all state becomes prop 
const mapStateToProps = state => ({
	...state
});

// this.props.simpleAction
const mapDispatchToProps = dispatch => ({
	simpleAction: () => dispatch(SimpleAction())
})

// state + dispatch => prop
export default connect(mapStateToProps, mapDispatchToProps)(App);

