import React from 'react';
import {
  Link
} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export default class SingleItem extends React.Component {
  render() {
    return (
        <div>
			<Header />
        	<p>single bed</p>
			<Link to={`/`} >Back</Link>
			<Footer />
    	</div>
  	);
  }
}
