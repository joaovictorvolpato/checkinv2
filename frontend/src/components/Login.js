import React from "react";
import Header_home from './Header_home';
import { Form, Button, Container, Row } from "react-bootstrap";
import { useState } from 'react';
import axios from "axios";

const Login = (props) => {

    const [loginForm, setloginForm] = useState({
      email: "",
      password: ""
    })

    function logMeIn(event) {
      axios({
        method: "POST",
        url:"http://127.0.0.1:5000/login",
        headers: {'Content-Type': 'application/json', 
                  'Access-Control-Allow-Origin': '*'},
        data: JSON.stringify({
          email: loginForm.email,
          password: loginForm.password
        })
      })
      .then((response) => {
        props.setToken(response.data.access_token)
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
          }
      })

      setloginForm(({
        email: "",
        password: ""}))

      event.preventDefault()
    }

    function handleChange(event) { 
      const {value, name} = event.target
      setloginForm(prevNote => ({
          ...prevNote, [name]: value})
      )}

    const obj_style = {
        'margin-top': '10%',
        'padding': '2%',
        'background-color': 'white',
    }
    const external_div = {
      'background-image': 'url("earth-g530ed52ac_1920.jpg")'
      
    }
  return (
    <div style = {external_div}>
    <Header_home names = {["Checkin", "Home", "Login", "Signup"]}/>
    <Container className="col-md-4" style = {obj_style}>
     
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onChange = {handleChange}
                          type="email" 
                          placeholder="Email"
                          name = "email"
                          text = {loginForm.email}
                          value = {loginForm.email} 
                          />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>

          <Form.Control onChange = {handleChange} 
                          type="password" 
                          text = {loginForm.password}
                          name = "password"
                          placeholder="Password"
                          value = {loginForm.password}
                           />
          </Form.Group>
          
          <Button onClick = {logMeIn} variant="dark" type="submit">
            Login
          </Button>
        </Form>
      
    </Container></div>
  );
};

export default Login;
