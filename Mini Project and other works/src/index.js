import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pro from './Pro';
import Contact from './Contact';
import Test from './Test';
import Education from './education';
import AboutMe from './AboutMe';
import Project from './projects';
import {Routes, Route, Link, NavLink,useMatch, useResolvedPath, Outlet, BrowserRouter as Router } from 'react-router-dom';
import { color } from '@mui/system';
import NavBar from './navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {/* {routing} */}
    <header>
      <h1 align="center">My Portfolio</h1>
    </header>
    <Router>
      <div className='outer'>
        <div className='inner1'>
          <NavBar/>          
        </div>
        <div className='inner2'>
          <AboutMe/>
        </div>
        <div className='inner3'>
        <Routes>
          <Route path="/Pro" element={ <Pro/> } />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Education" element={<Education/>}/>
          <Route path="/Project" element={<Project/>}/>
      </Routes>
        </div>
      </div>           
  </Router>
  </React.StrictMode>
);

reportWebVitals();
