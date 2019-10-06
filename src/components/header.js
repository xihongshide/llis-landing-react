import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

import { VelocityTransitionGroup } from 'velocity-react';

class Header extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand className="nav-logo">
                        <NavLink to="/">
                            <span>L</span>
                            <span>L</span>
                            <span>I</span>
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <div>
                                <NavLink exact to="/" activeClassName="selected" className="home">Home</NavLink>
                                <span>/</span><NavLink to="/about" activeClassName="selected" className="about">About</NavLink>
                                <span>/</span><NavLink to="/skills" activeClassName="selected" className="skills">Skills</NavLink>
                                <span>/</span><NavLink to="/contact" activeClassName="selected" className="contact">Contact</NavLink>
                                <span>/</span><NavLink to="/blog" activeClassName="selected" className="blog">Blog</NavLink>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
