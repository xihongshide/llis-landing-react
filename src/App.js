import React from 'react';
import $ from 'jquery';
// import logo from './logo.svg';
import './assets/css/App.css';
import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';

function App() {
    return (
        <div className="App">
              <Header/>
              <Content/>
              <Footer/>
        </div>
    );
}

export default App;
