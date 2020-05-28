import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import fire from '../config/Fire';
import '../styles/Navigation.css';


const Navigation = () => {

    function logout() {
        fire.auth().signOut();
        localStorage.clear();
        sessionStorage.clear();
    }

    return (
        <React.Fragment>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Link to="/home">
                    <Navbar.Brand style={{ margin: '0' }} tag={Link} to="/home" >
                        <img
                            alt="logo"
                            src={Logo}
                            width="25%"
                            height="25%"
                            className="d-inline-block align-center"
                        />
                        <span id="company-moto">One space for all your needs</span>
                    </Navbar.Brand>
                </Link>
                <p></p>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-items">
                        {/* <Link to="/documents"> */}
                        <Nav.Link href="/documents/#documentlist" tag={Link} to="/documents">All documents</Nav.Link>
                        {/* </Link> */}
                        <Nav.Link href="/my-to-do/#todos" tag={Link}>My To-Do</Nav.Link>
                    </Nav>
                    <NavDropdown title="Your account" className="nav-items" id="collasible-nav-dropdown">
                        {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> */}
                        {/* <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> */}
                        {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                        <NavDropdown.Divider />
                        <Link to="/landing-page">
                            <NavDropdown.Item tag={Link} to="/" onClick={logout}>Sing-out</NavDropdown.Item>
                        </Link>
                        <NavDropdown.Divider />
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