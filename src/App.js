import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {Home} from './Components/Pages/Home';
import { BrowserRouter as  Router,  Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/' component = {Home}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;


