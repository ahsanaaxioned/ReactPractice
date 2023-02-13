import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test from './Test';
import ClassCompo from './ClassCompo';
import JsxTest from './JsxTest';
import TestProps from './TestProps'
import reportWebVitals from './reportWebVitals';

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
  </React.StrictMode>
);

reportWebVitals();
