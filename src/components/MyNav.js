import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const MyNav = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home" style = {{fontFamily: 'cursive', fontSize: '30px'}}>Pokemons</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link active>Home</Nav.Link>
          <Nav.Link disabled>About us</Nav.Link>
          <Nav.Link disabled>Contact</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    )
}

export default MyNav;