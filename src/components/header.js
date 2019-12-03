import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
// import { VelocityTransitionGroup } from 'velocity-react';

class Header extends Component {
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

                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto nav-list">
                            <div>
                                <ul>
                                    <li>
                                        <NavLink exact to="/" activeClassName="selected" className="home">Home</NavLink>
                                    </li>
                                    <li>
                                        <span>/</span><NavLink to="/about" activeClassName="selected" className="about">About</NavLink>
                                    </li>
                                    <li>
                                        <span>/</span><NavLink to="/skills" activeClassName="selected" className="skills">Skills</NavLink>
                                    </li>
                                    <li>
                                        <span>/</span><NavLink to="/contact" activeClassName="selected" className="contact">Contact</NavLink>
                                    </li>
                                    <li>
                                        <span>/</span><NavLink to="/blog" activeClassName="selected" className="blog">Blog</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
