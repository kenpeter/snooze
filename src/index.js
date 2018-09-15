// react
import React from 'react';

// react dom
import ReactDOM from 'react-dom';

// provider
import { Provider } from 'react-redux';

// route
import { Route, Switch } from 'react-router'; 
// connect
import { ConnectedRouter } from 'connected-react-router';

// store
import configureStore from './store/configureStore';

// history
import { createBrowserHistory } from 'history';

// app
import App from './components/App';
import SingleItem from './components/SingleItem';

// service? 
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

// dom display
// app
// to root
ReactDOM.render(
	<Provider store={configureStore(history)}>
    	<ConnectedRouter history={history}>
        		<Switch>
          			<Route exact path="/" render={(props) => <App {...props} history={history} />} />
					<Route exact path="/single" component={SingleItem} />
          			<Route render={() => (<div>Miss</div>)} />
        		</Switch>
    	</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

// serivce?
registerServiceWorker();
