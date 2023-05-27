import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as  Router,  Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path = '/'> </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;


