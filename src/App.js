import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import MiningLevels from './components/MiningLevels';
import Referral from './components/Referral';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/*<Route path='/' element={ <Home /> } />*/}
          <Route path='/' element={ <Dashboard /> } />

          {/*<Route path='/' element={ <AboutUs /> } />
          <Route path='/' element={ <MiningLevels /> } />
          <Route path='/' element={ <Referral /> } />
          <Route path='/' element={ <FAQ /> } />
          <Route path='/' element={ <Contact /> } />
          <Route path='/' element={ <Footer /> } />*/}

        </Routes>
      </Router>
    </>
  );
}

export default App;
