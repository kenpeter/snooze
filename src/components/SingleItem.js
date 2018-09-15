import React from 'react';
import {
  Link
} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

export default class SingleItem extends React.Component {
  render() {

	console.log(this.props.location.state.data);
	let d = this.props.location.state.data;

    return (
        <div>
			<Header />
			
			<Link to={`/`} >Back</Link>

			<div>
        		<h3>{d.title}</h3>
				<p>sku: {d.sku}</p>
				<p>price: {d.current_price}</p>
				<p>handle: {d.shopify_handle}</p>
				<p>material: {d.material}</p>

				<p>last updated: {d.updated_at}</p>
			</div>

			<Footer />
    	</div>
  	);
  }
}
