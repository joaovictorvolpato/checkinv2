import React, { useEffect, useState } from "react";
import Header_home from './Header_home';
import {Form, Button, Container, Dropdown} from "react-bootstrap";
import axios from "axios";
import DropdownButton from 'react-bootstrap/DropdownButton';
import userEvent from "@testing-library/user-event";

const baseURL = "http://localhost:5000/register"

const Register = () => {

  
    const [email, setemail] = useState('');
    const [c_email, setc_email] = useState('');
    const [pass, setpass] = useState('');
    const [c_pass, setc_pass] = useState('');
    const [vso, set_vso] = useState('');
    const [so, set_so] = useState('');

    const [vso_vazio, set_vso_vazio] = useState('');
    const [so_vazio, set_so_vazio] = useState('');

    const [e_dif, set_e_dif] = useState('');
    const [s_dif, set_s_dif] = useState('');

    const [e, set_e] = useState('');
    const [s, set_s] = useState('');

    const [reg, setReg] = useState('');

    function registerUser(){

      var error = true
      if (pass == '') {

        set_s('(Escreva uma senha)')
        error = false
        
      } else {
            set_s('')
      }
    
      if (email == '') {

        set_e('(Escreva um email)')
        error = false
        
      } else {
            set_e('')
      }
 
      if (pass != c_pass) {

            set_s_dif('(Senhas não estão iguais)')
            error = false
            
      } else {
            set_s_dif('')
      }

     
      if (email != c_email) {
            set_e_dif('(Emails não estão iguais)')
            error = false

        } else {
            set_e_dif('')

        }
    
      if (vso == '') {
          set_vso_vazio('(Escreva a versão SO)')
          error = false
      } else {
          set_vso_vazio('')
          
      }
   
      if (so == '') {
        set_so_vazio('(Selecione um SO)')
        error = false
      } else {
        set_so_vazio('')
        
      }
      console.log('error', error)
      if (error) {
        axios
          .post(
            baseURL, 
            {
              email : email,
              password: pass,
              os_version: vso,
              os: so
          },
          {withCredentials: false} , 
          {
            headers: { "Content-Type": "application/json",
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': '*',
                        'Access-Control-Allow-Credentials': 'true'},
          }) 
          .then((response)=>{
            
            console.log(response)
            if (response.data.status == 'sucess'){
                setReg(response.data.message)
            } else {
                setReg(response.data.message)
            }

        })

      }
        
      }
    
    function teste(){

      console.log('teste')
    }
    const obj_style = {
        'marginTop': '10%',
        'padding': '2%',
        'backgroundColor': 'white',
    }
  return (
    <div>
    <Header_home names = {["Checkin", "Início", "Entrar", "Cadastro"]}/>
    <Container className="col-md-4" style = {obj_style}>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email {e}</Form.Label>
        <Form.Control
        onChange={(e)=>setemail(e.target.value)} 
        type="email" 
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmailConfirm">
        <Form.Label>Confirme seu email {e_dif}</Form.Label>
        <Form.Control
        onChange={(e)=>setc_email(e.target.value)} 
        type="email" 
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha {s}</Form.Label>
        <Form.Control 
        onChange={(e)=>setpass(e.target.value)}
        type="password" 
         />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
        <Form.Label>Confirme sua senha {s_dif}</Form.Label>
        <Form.Control
        onChange={(e)=>setc_pass(e.target.value)} 
        type="password" 
         />
      </Form.Group>
      <br></br>
      <DropdownButton 
      id="dropdown-basic-button" 
      variant= 'dark'
      title="Sistema operacional"
      onSelect={(e)=>set_so(e)}>
      <Dropdown.Item eventKey="ios">ios</Dropdown.Item>
      <Dropdown.Item eventKey="android">android</Dropdown.Item>
     </DropdownButton>
     {so_vazio}
      <br></br><br></br>
      <Form.Group className="mb-3" controlId="vso">
        <Form.Label>Versão do sistema operacional {vso_vazio}</Form.Label>
        <Form.Control
        onChange={(e)=>set_vso(e.target.value)}
        type="text" 
         />
      </Form.Group>
      <Button variant="dark" onClick ={registerUser}>
        Registrar-me
      </Button>
      {reg}
    </Form></Container></div>
  );
};

export default Register;
