import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC0otilYsGdevUPet-hWjbNcH3_n5RcI40",
    authDomain: "chatter-97f4c.firebaseapp.com",
    databaseURL: "https://chatter-97f4c-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "chatter-97f4c",
    storageBucket: "chatter-97f4c.appspot.com",
    messagingSenderId: "329070023026",
    appId: "1:329070023026:web:efd6e909c5ef213fbc8deb",
    measurementId: "G-9GQZHBMBT3"
  };


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
