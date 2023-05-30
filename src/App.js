import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
 import Home from './Components/Pages/Home';
import { BrowserRouter as  Router,  Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <Navbar />
  
      //  <Router> 
      //   <Navbar />
      
      //    <Routes>
      //   <Route path='/home'  component={ <Home />} />
      //   </Routes> 
      // </Router>
    
  )
}

export default App;


