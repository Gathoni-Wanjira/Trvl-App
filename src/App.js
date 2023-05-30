import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import { BrowserRouter as  Router,  Routes, Route, Link } from 'react-router-dom';


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        <Routes>
          <Route path = '/'> </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;


