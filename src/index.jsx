import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import App from './App';
// import { NetFlixApp } from './Netflix/netflixIndex';
// import { Databinding } from './components/databinding';
// import { OneAndTwo_wayData_Binding } from './components/onewayTwowayBinding';
// import ApiBindAndClassBind from './components/apiBindinAndClassBinding';
// import Carousel from './components/carouselComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring  performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
