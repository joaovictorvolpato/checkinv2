import React, { useEffect } from "react";
import Header_home from "./Header_home";
import { Form, Button, Container, Row } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import useToken from "./useToken";
const baseURL = "http://localhost:5000/logout"

const Logout = (props) => {
    
    const [res, setRes] = useState('')

    useEffect(()=>{

    
    axios
      .post(
        baseURL,
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
        if (response.data.msg == "logout successful"){
            setRes(response.data.msg)
            localStorage.removeItem('token')
        }
        
      })})
      
      
 
  

  const obj_style = {
    "marginTop": "10%",
    padding: "2%",
    "backgroundColor": "white",
  };
  const external_div = {
    'textAlign': 'center',
    "backgroundImage": 'url("earth-g530ed52ac_1920.jpg")',
  };
  return (
    <div style={external_div}>
      <Header_home names={["Checkin", "Início", "Entrar", "Cadastro"]} />
      <Container className="col-md-4" style={obj_style}>
          {res}
      </Container>
    </div>
  );
};

export default Logout;

