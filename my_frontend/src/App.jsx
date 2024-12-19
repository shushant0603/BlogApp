import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Form from './components/Form.jsx';
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import './App.css';
import Login from './components/Login.jsx';


function App() {
  return (
    <>
 
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;