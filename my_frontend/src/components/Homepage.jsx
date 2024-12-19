import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Signup'; // Assuming you have the Signup component
import Login from './Login'; // Assuming you have the Login component

const Homepage = () => {
  return (
    <div className="flex items-center justify-center bg-red-100">
      <div className="bg-white p-6 rounded  w-96">
      
        <Signup/>
        <Login/>
           
      </div>
    </div>
  );
};

export default Homepage;