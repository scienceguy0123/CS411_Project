import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> chou



ReactDOM.render(
<<<<<<< HEAD
    <React.StrictMode>
      <App />
    </React.StrictMode>
=======
      <React.StrictMode>
            <BrowserRouter>

        <App />
        </BrowserRouter>

      </React.StrictMode>

>>>>>>> chou
,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
