import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

require('velocity-animate');
require('velocity-animate/velocity.ui');
require('bootstrap/dist/js/bootstrap.min.js');
window.$ = window.jQuery = require('jquery');
require('blast-text/jquery.blast');

// Initialize Performance Monitoring and get a reference to the service

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
