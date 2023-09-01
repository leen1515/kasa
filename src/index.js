import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './sass/main.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

/** @namespace root */
/**
* The code is creating a root element using `ReactDOM.createRoot()` and rendering the JSX code inside
* it. The JSX code includes a `<React.StrictMode>` component, which is used to highlight potential
* problems in the application during development. Inside the `<React.StrictMode>`, there is a
*`<BrowserRouter>` component, which is used for routing in React applications. The `<Header/>`,
*`<App/>`, and `<Footer/>` components are also rendered inside the `<BrowserRouter>`.
* @param {} document.getElementById('root') Id in the dom : root
* @returns {} application in root
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Header/>
    <App />
    <Footer/>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
