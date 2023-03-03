import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test';
import ClassCompo from './ClassCompo';
import JsxTest from './JsxTest';
import TestProps from './TestProps'
import reportWebVitals from './reportWebVitals';
import ParentCompo from './ParentCompo';
import RendorCom from './RendorCom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Test />
    <ClassCompo />
    <JsxTest />
    <TestProps name='ahsan' greet="goodmornig" />
    <TestProps name='saif' greet="goodafternoon" />
    <TestProps name='junaid' greet="goodnight" />
    <ParentCompo />
    <RendorCom isLoggedIn = {true} />
  </React.StrictMode>
);

reportWebVitals();
