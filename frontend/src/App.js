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


function App() {
  
  const { token, removeToken, setToken } = useToken()
  return (
    
    <Router>
      <Routes>
        
        <Route path= "/" element={<Home/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/register" element={<Register/>}/>
        <Route path= "/logged" element={<Logged/>}/>
      
      </Routes>
      
    
  </Router>
  );
}

export default App;
