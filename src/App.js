import React from 'react';
// import logo from './logo.svg';
import './assets/css/App.css';

import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';

class App extends React.Component {
    constructor(props) {
        super(props);

        //sates
        this.state = {
            "panelIndex": 0
        };

        //methods
        this.onSwitchPanels = this.onSwitchPanels.bind(this);
    }

    onSwitchPanels(res) {
        // console.log(res);
        this.setState({ panelIndex: res });
    }

    render(){
        let panelIndex = this.state.panelIndex;
        let onSwitchPanels = this.onSwitchPanels;

        return (
            <div className="App">
                  <Header switchPanels={onSwitchPanels}/>
                  <Content panelIndex={panelIndex} switchPanels={onSwitchPanels}/>
                  <Footer />
            </div>
        );
    }
}

export default App;
