import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Cakes from './Cakes';
import Header from './Header';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Header />
    <Cakes />
    <Footer />
   
  </React.StrictMode>
);

