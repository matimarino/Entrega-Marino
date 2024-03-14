import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (<Navbar bg="dark" data-bs-theme="dark">
    <Container>
    <Navbar.Brand href="#home">MyM Drops</Navbar.Brand>
    <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#sneakers">Sneakers</Nav.Link>
        <Nav.Link href="#indumentaria">Indumentaria</Nav.Link>
        <Nav.Link href="#accesorios">Accesorios</Nav.Link>
    </Nav>
    <CartWidget/>
    </Container>
</Navbar>
);
};