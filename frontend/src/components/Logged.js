import React from "react";
import Header_logged from './Header_logged';
import Info_card from "./Info_card";
import { useState } from 'react';
import axios from "axios";

const Logged = (props) => {
  const [profileData, setProfileData] = useState(null)
  function getData() {
    axios({
      method: "GET",
      url:"http://localhost:5000/profile",
      headers: {
        Authorization: 'Bearer ' + props.token
      }
    })
    .then((response) => {
      const res =response.data
      res.access_token && props.setToken(res.access_token)
      setProfileData(({
        email: res.email,
        os: res.os,
        password: res.password,
        os_version: res.os_version,
        activate: res.activate}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}

  return (

    

   <div>
    <Header_logged names = {["Checkin", "Checkout"]}/>
    <Info_card info = {{
                        }}/>
    </div>
  );
};

export default Logged;