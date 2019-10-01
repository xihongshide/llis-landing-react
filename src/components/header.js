import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import { VelocityTransitionGroup } from 'velocity-react';

class Header extends Component {
    constructor(props){
        super(props);

        console.log("Header props:");
        console.log(props);

        this.handlePanelChange = this.handlePanelChange.bind(this);
    }

    handlePanelChange(e) {
        this.props.switchPanels(e.target.getAttribute("data-index"));
    }

    render() {
        let handlePanelChange = this.handlePanelChange;

        return (
            <div className="header">
                <Navbar bg="light" expand="lg">
                    <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
                        <Navbar.Brand className="nav-logo">
                            <Link to="/">
                                <span>L</span>
                                <span>L</span>
                                <span>I</span>
                            </Link>
                        </Navbar.Brand>
                    </VelocityTransitionGroup>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/skills">Skills</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/blog">Blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
