import * as firebase from "firebase/app";
import "firebase/performance";
import "firebase/analytics";

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
    apiKey: "AIzaSyAVG6UkODG56OC7EGDzr9JcqbMcUwGlzvw",
    authDomain: "llislanding.firebaseapp.com",
    databaseURL: "https://llislanding.firebaseio.com",
    projectId: "llislanding",
    storageBucket: "llislanding.appspot.com",
    messagingSenderId: "2472920419",
    appId: "1:2472920419:web:c1b33357839083b0b6bf56",
    measurementId: "G-7V83SR76FY"
};

const fire = firebase.initializeApp(config);
const analytics = fire.analytics();
const performance = fire.performance();

export {fire, analytics, performance};
