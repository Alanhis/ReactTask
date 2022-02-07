import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import ConnectComp from './ConnectComp.js'
import ConnectCompDate from './ConnectCompDate.js'
import ConnectTeamDate from './ConnectTeamDate.js'
import ConnectTeam from './ConnectTeam.js'
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="ConnectComp" element={<ConnectComp />} />
      <Route path="ConnectCompDate" element={<ConnectCompDate />} />
      <Route path="ConnectTeam" element={<ConnectTeam />} />
      <Route path="ConnectTeamDate" element={<ConnectTeamDate />} />
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
