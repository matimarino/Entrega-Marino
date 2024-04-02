import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (<Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <Navbar.Brand to="#home">MyM Drops</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link to="/category/Sneakers" as={NavLink}>Sneakers</Nav.Link>
        <Nav.Link to="/category/Accesorios" as={NavLink}>Accesorios</Nav.Link>
    </Nav>
    <CartWidget/>
    </Container>
</Navbar>
);
};