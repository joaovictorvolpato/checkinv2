import React from "react";
import Header_home from './Header_home';
import {Form, Button, Container} from "react-bootstrap";

const Signup = () => {
    const obj_style = {
        'margin-top': '10%',
        'padding': '2%',
        'background-color': 'white',
    }
  return (
    <div>
    <Header_home names = {["Checkin", "Home", "Login", "Signup"]}/>
    <Container className="col-md-4" style = {obj_style}>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="email" placeholder="Enter username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">

        <Form.Check type="checkbox" label="I agree with all the therms bellow" />
      </Form.Group>

      <Button variant="dark" type="submit">
        Signup
      </Button>
    </Form></Container></div>
  );
};

export default Signup;
