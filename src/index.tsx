import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './tailwind.css';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
if (module.hot) module.hot.accept();
