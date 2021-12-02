import React from 'react';
import ReactDOM from 'react-dom';
import {getUrlParametro} from './utils/index';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './components/Login';
import App from './App';

ReactDOM.render(
  <BrowserRouter>
   <Routes>
      <Route path="*" element={getUrlParametro() == 'null' || getUrlParametro() == null ? <Login /> : <App /> }/>
    
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);