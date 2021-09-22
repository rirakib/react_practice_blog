import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import '../node_modules/bootstrap5/src/css/bootstrap.min.css'
import '../node_modules/bootstrap5/src/js/bootstrap.bundle.min.js'
import Navbar from './component/navbar/Navbar';
import { Route } from 'react-router';
import App from './App';
import './component/Home/rirbtn.css'
import { BrowserRouter } from 'react-router-dom';




ReactDOM.render(
  
   <>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
      
   </>,
  document.getElementById('root')
);


