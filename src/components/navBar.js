import { Button, Nav, Navbar, Form } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

function NavBar() {

    return (
        <>
            <Navbar sticky="top" bg="white" variant="light" expand="lg">
                <Navbar.Brand as={NavLink} to="/">
                    <img
                        alt=""
                        src="https://apps.lib.kth.se/polopoly/KTH_Logotyp.svg"
                        width="75"
                        height="75"
                        className="d-inline-block align-top"
                    />{' '}
                    KTH Bibliotekets Databaslista
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav variant="" activeKey="/dbl">
                        <Nav.Item>
                            <Nav.Link as={NavLink} to="/dbl">Home</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
                <div id="gradientBorder"></div>
            </Navbar>
            
        </>
    );
}

export default NavBar;