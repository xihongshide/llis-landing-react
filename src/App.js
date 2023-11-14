import React from 'react';
// import logo from './logo.svg';
import './assets/scss/App.css';
import { BrowserRouter as Router} from "react-router-dom";

import Header from './components/header.js';
import Content from './components/content.js';
import Footer from './components/footer.js';
import WechatModal from './components/partialComponents/wechatModal.js';


/* ******************************************************************************
* Components starts after this AJ dunk
* ********************************************************************************

                   ooooooo=_-___
                  oooooooo\__ \
                 ooooooooooo_| \
                  ooooooooo\__  \
                    oooooo    \  \
                               \  \
 __________________             |   \
|__________________|             \   |
\/\/\/\/\/\/\/\/\/     _----_    |   |
  \/\/\/\/\/\/\/\/     |      \   |   |
   \/\/\/\/\/\/\/      |       |    |  |
    |/\/\/\/\/\|        |       \__/    |
    |/\/\/\/\/\|         __---          |
    |/\/\/\/\/\|       /   \            |
                      |     |          |
                      |   /            |
                      |   \            |
                      |   | \          |
                      |   |   \____-----\
                      |   |    \____-----\
                      |  |    |            \
                      |  |   |              \
                      \  \_|_       |         |
                       \____/______/ \_______/\
                            /    /       \     \
                          /     /          \     \
                         /    /              \    \
                       /    /                  \    \
                      /   /                      \   \
                /\   /  /                          \  |
               |  \/ \/                             \/ \
                \    /                             _/   |
                 \__/                            /______/


* ********************************************************************************
* ******************************************************************************** */

class App extends React.Component {
    render(){
        return (
            <div className="app">
                <WechatModal />
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
