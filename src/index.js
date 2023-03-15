import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './css/index.css';
import App from './js/App';
import reportWebVitals from './reportWebVitals';
import AfricaMap from './js/AfricaMap';
import NigeriaMap from './js/NigeriaMap';
import BasePage from "./js/BasePage";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<BasePage />}></Route>
      <Route path="/nigeriaMap" element={<NigeriaMap />}></Route>
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
