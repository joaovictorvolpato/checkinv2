import React from "react";
import Header_home from "./Header_home";
import { Form, Button, Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import useToken from "./useToken";
const baseURL = "http://localhost:5000/login"

const Login = (props) => {
  const [loginEmail, setloginEmail] = useState("");
  const [loginPass, setloginPass] = useState("");

  const [checkEmail, setCheckEmail] = useState('');
  const [checkPass, setCheckPass] = useState('');

  const [res, setRes] = useState('');

  function logMeIn() {
    var error = true
    if (loginPass == '' ) {
        setCheckPass('   (Digite a sua senha)')
        error = false
    } else {
      setCheckPass('')
    }

    if (loginEmail == '' ) {
      setCheckEmail('   (Digite o seu email)')
      error = false
  } else {
      setCheckEmail('')
  }
    if (error) {
    axios
      .post(
        baseURL,
        {
          email: loginEmail,
          password: loginPass,
        },
        { withCredentials: false },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
          },
        }
      )
      .then((response) => {
        console.log(response)
        if (response.data.status == 'fail') {
            setRes(response.data.message)
        } else {
            setRes('')
          console.log(response.data.access_token)
          localStorage.setItem('token', response.data.access_token);}
      })
      
      ;}
  }
  

  const obj_style = {
    "marginTop": "10%",
    padding: "2%",
    "backgroundColor": "white",
  };
  const external_div = {
    "backgroundImage": 'url("earth-g530ed52ac_1920.jpg")',
  };
  return (
    <div style={external_div}>
      <Header_home names={["Checkin", "Início", "Entrar", "Cadastro"]} />
      <Container className="col-md-4" style={obj_style}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>{checkEmail}
            <Form.Control
              onChange={(e) => {
                setloginEmail(e.target.value);
              }}
              type="email"
              name="email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>{checkPass}

            <Form.Control
              onChange={(e) => {
                setloginPass(e.target.value);
              }}
              type="password"
              name="password"
            />
          </Form.Group>

          <Button onClick={logMeIn} variant="dark">
            Login
          </Button>{res}
        </Form>
      </Container>
    </div>
  );
};

export default Login;
