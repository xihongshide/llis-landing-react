import React, { Component } from 'react';
//wheel components
import { Switch, Route } from "react-router-dom";

//custom components
import Home from './home.js';
import About from './about.js';
import Skills from './skills.js';
import Contact from './contact.js';
import Wedding from './wedding.js';
import UnderConstruction from "./underConstruction.js";
import ClockComponent from "./clock";

class Content extends Component {
    render() {
        return (
            <Switch>
                <Route path="/construction">
                    <UnderConstruction />
                </Route>

                {/*
                ----------------------------------------------------------------
                Under construction pages above
                ----------------------------------------------------------------
                */}

                <Route path="/clock">
                    <ClockComponent />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/wedding">
                    <Wedding />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        );
    }
}

export default Content;
