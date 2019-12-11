import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.closeNavbar = this.closeNavbar.bind(this);
        this.state = {
            isOpen: false,
        };
    }

    toggle() {
        console.log("toggle");
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    closeNavbar() {
        console.log("close");
        this.setState({
            isOpen: false
        });
    }

    render() {
        return (
            <div className="header">
                <Navbar bg="light" expand="lg" expanded={this.state.isOpen}>
                    <Navbar.Brand className="nav-logo">
                        <NavLink to="/">
                            <span>L</span>
                            <span>L</span>
                            <span>I</span>
                        </NavLink>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={this.toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto nav-list">
                            <div>
                                <ul>
                                    <li onClick={this.closeNavbar}>
                                        <NavLink exact to="/" activeClassName="selected" className="home">Home</NavLink>
                                    </li>
                                    <li onClick={this.closeNavbar}>
                                        <span>/</span><NavLink to="/about" activeClassName="selected" className="about">About</NavLink>
                                    </li>
                                    <li onClick={this.closeNavbar}>
                                        <span>/</span><NavLink to="/skills" activeClassName="selected" className="skills">Skills</NavLink>
                                    </li>
                                    <li onClick={this.closeNavbar}>
                                        <span>/</span><NavLink to="/contact" activeClassName="selected" className="contact">Contact</NavLink>
                                    </li>
                                    <li onClick={this.closeNavbar}>
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
