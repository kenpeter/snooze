import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class SingleItem extends React.Component {
  render() {
    return (
        <div>
			<Header />
        	<p>single bed</p>	
			<Footer />
    	</div>
  	);
  }
}
