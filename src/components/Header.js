import React from 'react'
import { Container, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, Route, Switch} from "react-router-dom";

const Header = () => (
  <div>
    <Navbar bg="primary" variant="dark">
      <Container className={'pl-1'}>
        <Navbar.Brand>To-Do App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" >Home</Nav.Link>
          <Nav.Link as={Link} to="/todo">To-Do</Nav.Link>
        </Nav>
        {/*<Form inline>*/}
        {/*  <FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
        {/*  <Button variant="outline-light">Search</Button>*/}
        {/*</Form>*/}
      </Container>
    </Navbar>
  </div>
);

export default Header;
