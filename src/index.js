import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase/app";
import "firebase/performance";

require('velocity-animate');
require('velocity-animate/velocity.ui');
require('bootstrap/dist/js/bootstrap.min.js');
window.$ = window.jQuery = require('jquery');
require('blast-text/jquery.blast');

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVG6UkODG56OC7EGDzr9JcqbMcUwGlzvw",
    authDomain: "llislanding.firebaseapp.com",
    databaseURL: "https://llislanding.firebaseio.com",
    projectId: "llislanding",
    storageBucket: "llislanding.appspot.com",
    messagingSenderId: "2472920419",
    appId: "1:2472920419:web:c1b33357839083b0b6bf56",
    measurementId: "G-LM9FXDE3LB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Performance Monitoring and get a reference to the service
var perf = firebase.performance();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
