import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from '../assets/Logo.png';
import fire from '../config/Fire';
import '../styles/Navigation.css';

const Navigation = () => {

    function logout() {
        fire.auth().signOut();
    }

    return (
        <React.Fragment>
            {/* 
            <Navbar bg="dark" variant="dark" expand="lg" style={{ width: '100vw', margin: '0' }}>
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src={Logo}
                        width="30%"
                        height="30%"
                        className="d-inline-block align-top"
                    />
      React Bootstrap
    </Navbar.Brand>
            </Navbar>
            <button onClick={logout}>Logout</button>
             */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home" style={{ margin: '0' }}>
                    <img
                        alt="logo"
                        src={Logo}
                        width="25%"
                        height="25%"
                        className="d-inline-block align-center"

                    />
                    <span id="company-moto">One space for all your needs</span>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-items">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <NavDropdown title="Your account" className="nav-items" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logout}>Sing-out</NavDropdown.Item>
                    </NavDropdown>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>

        </React.Fragment>
    );
}

export default Navigation;