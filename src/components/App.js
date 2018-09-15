import React from 'react';

import Bed from './Bed';
import Header from './Header';
import Footer from './Footer';

export default class App extends React.Component {
  render() {
    return (
        <div>
			<Header />
        	<Bed history={this.props.history}/>
			<Footer />
    	</div>
  	);
  }
}
