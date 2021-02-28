import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyClG1ItI2HrpMdNhdMh_f4FYNLe7vIOSOg",
  authDomain: "cart-app-26878.firebaseapp.com",
  projectId: "cart-app-26878",
  storageBucket: "cart-app-26878.appspot.com",
  messagingSenderId: "409875072638",
  appId: "1:409875072638:web:892d2305d8eca09745fa2f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
