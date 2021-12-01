import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './components/Login';
import App from './App';
import Table from './App';

ReactDOM.render(
  <BrowserRouter>
   <Routes>
      <Route path="*" element={
        document.cookie.indexOf("expires") > 0 ? <Login /> : <App />
      }/>

    <Route path=":page" element={
      <App />
    }/>
    
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);