import React, { Component } from 'react';
//wheel components
import { Switch, Route } from "react-router-dom";

//custome components
import Home from './home.js';
import About from './about.js';
import Skills from './skills.js';
import Blog from './blog.js';
import Contact from './contact.js';

class Content extends Component {
    render() {
        return (
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        );
    }
}

export default Content;
