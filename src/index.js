import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Currencies from './pages/currencies'
import Price from './pages/price'
import Main from './pages/main'
import Nav from './components/nav'

//Wrap the app component with the Router component to enable the router features
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route>
          <Route path='/' element={<App />} >
            <Route index element={<Main />} />
            <Route path="/currencies" element={<Currencies />} />
            <Route path="/price" element={<Price />} >
              <Route path=':symbol' element={<Price />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

