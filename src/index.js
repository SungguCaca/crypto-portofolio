import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Footer from './components/Footer';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
      <App />
      {/* <Footer /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
