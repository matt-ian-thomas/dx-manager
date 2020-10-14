import React, {Component} from 'react';
window.React = React;
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// Component imports
import App from './app';
import store from './ducks/store';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
