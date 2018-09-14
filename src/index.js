// react
import React from 'react';

// react dom
import ReactDOM from 'react-dom';

// provider
import { Provider } from 'react-redux';

// store
import configureStore from './store';

// css
import './index.css';

// app
import App from './App';

// service? 
import registerServiceWorker from './registerServiceWorker';

// dom display
// app
// to root
ReactDOM.render(
	<Provider store={configureStore()}>
		<App />
	</Provider>,
	document.getElementById('root')

);

// serivce?
registerServiceWorker();