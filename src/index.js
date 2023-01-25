// أعوذ بالله من الشيطان الرجيم سْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيم أعوذ

//________IMPORTS_____________
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "../src/Styles/index.css"
//____________________________

//________FUNCTION____________
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
//____________________________