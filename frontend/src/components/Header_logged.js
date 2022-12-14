import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header_logged = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >{props.names[0]}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href='/'>{props.names[1]}</Nav.Link>
          <Nav.Link href='/deslogar'>{props.names[2]}</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header_logged;
