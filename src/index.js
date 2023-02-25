import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tw-elements';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Context/UserContex';
import { CartProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <BrowserRouter>
  <CartProvider>
  <UserProvider>
   <App/>
   </UserProvider>
   </CartProvider>
  </BrowserRouter>
 
);


