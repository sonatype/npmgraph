import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './bugsnag'; // Initialize ASAP!
import { Flash } from './Components';

// Used to feature-detect that es6 modules are loading
(window as { indexLoaded?: boolean }).indexLoaded = true;

window.addEventListener('error', err => {
  console.error(err);
  Flash(err.message);
});

window.addEventListener('unhandledrejection', err => {
  console.error(err);
  Flash(err.reason);
});

window.onload = function () {
  render(<App />, document.querySelector('#app'));
};
