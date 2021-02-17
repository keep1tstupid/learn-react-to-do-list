import React from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">To-Do App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#">Link1</Nav.Link>
          <Nav.Link href="#">Link2</Nav.Link>
          <Nav.Link href="#">Link3</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Container>
    </Navbar>
  </div>
);

export default Header;
