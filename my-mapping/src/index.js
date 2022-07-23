import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from './Profile';
import Mapa from './Map';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/inversion' element={<Profile/>}/>
      <Route path='/mapa-bonos' element={<Mapa/>}/>
    </Routes>

  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
