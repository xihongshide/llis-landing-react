import React from 'react';
// import logo from './logo.svg';
import './assets/css/App.css';
import { BrowserRouter as Router} from "react-router-dom";
import { withRouter } from "react-router";

import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="App">
                <Router>
                    <Header />
                    <Content />
                    <Footer />
                </Router>
            </div>
        );
    }
}

export default App;
