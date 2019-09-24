import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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
                            <span>L</span>
                            <span>L</span>
                            <span>I</span>
                        </Navbar.Brand>
                    </VelocityTransitionGroup>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#" onClick={handlePanelChange} data-index="0">Home</Nav.Link>
                            <Nav.Link href="#" onClick={handlePanelChange} data-index="1">About</Nav.Link>
                            <Nav.Link href="#" onClick={handlePanelChange} data-index="2">Skills</Nav.Link>
                            <Nav.Link href="#" onClick={handlePanelChange} data-index="3">Blog</Nav.Link>
                            <Nav.Link href="#" onClick={handlePanelChange} data-index="4">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;
