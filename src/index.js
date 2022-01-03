import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {WeaterProvider} from "./contexts/weaterApp"

ReactDOM.render(
  <React.StrictMode>
    <WeaterProvider>
    <App />
    </WeaterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

