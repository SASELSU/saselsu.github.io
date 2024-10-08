import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ScrollRestoration } from 'react-router-dom';

import "@fontsource/bebas-neue"; // Defaults to weight 400
import "@fontsource/bebas-neue/400.css"; // Specify weight
import "@fontsource/poppins"; // Defaults to weight 400
// import "@fontsource/open-sans"; // Defaults to weight 400
import "@fontsource/inter"; // Defaults to weight 400
import "@fontsource/adlam-display"; // Defaults to weight 400

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
