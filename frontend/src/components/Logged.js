import React from "react";
import Header_logged from './Header_logged';
import Info_card from "./Info_card";
import { useState, useEffect } from 'react';
import axios from "axios";

const baseURL = "http://localhost:5000/profile"

const Logged = () => {
  const [profileData, setProfileData] = useState({email: '',
                                                  password: '',
                                                  os: '',
                                                  os_version: ''})
 
  function removeToken(){
    localStorage.removeItem("token");
    window.location.reload();
  }
  
  useEffect(()=>{
    
    
    const userToken = localStorage.getItem('token');
    getData()
      
  },[]);

  function getData() {
    axios
    .get(
      baseURL, 
    
  
    {  withCredentials: false,
     headers: { 
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+localStorage.getItem('token'),
                  'Access-Control-Allow-Origin': '*',
                  'Access-Control-Allow-Headers': '*',
                  'Access-Control-Allow-Credentials': 'true'
                }
    }) 
    .then((response)=>{
      
      setProfileData(response.data)

  }).catch((error)=>{
    if (error){
    if (error.response.data.msg == 'Token has expired'){
        removeToken()
        setProfileData({email: '',
        password: '',
        os: '',
        os_version: ''})
    }}

  })}

  return (

    

   <div>
    <Header_logged names = {["Checkin", "Início", 'Deslogar']}/>
    <Info_card  info = {{email : profileData.email,
                         password: profileData.password,
                         os: profileData.os,
                         os_version: profileData.os_version
                        }} />  
    </div>
    
  );
};

export default Logged;