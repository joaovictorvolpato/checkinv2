import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Logged from "./components/Logged";
import useToken from './components/useToken'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Logout from "./components/Logout";


function App() {
  
  function entrar(){
    if (localStorage.getItem('token') != null) {
      console.log('logged')
      return <Logged/>
    } else {
      return <Login/>
    }

  }
  const { token, removeToken, setToken } = useToken()
  return (
    
    <Router>
      <Routes>
        
        <Route path= "/" element={<Home/>}/>
        <Route path= "/entrar" element={entrar()}/>
        <Route path= "/cadastro" element={<Register/>}/>
        <Route path= "/deslogar" element={<Logout/>}/>

      
      </Routes>
      
    
  </Router>
  );
}

export default App;
