import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header_home = (props) => {

  
  function check_login(){
    if (localStorage.getItem('token')!= null){
      return <Nav.Link href="/deslogar">{props.names[4]}</Nav.Link>
    }
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >{props.names[0]}</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">{props.names[1]}</Nav.Link>
          <Nav.Link href="/entrar">{props.names[2]}</Nav.Link>
          <Nav.Link href="/cadastro">{props.names[3]}</Nav.Link>
          {
            check_login()
          }
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header_home;
