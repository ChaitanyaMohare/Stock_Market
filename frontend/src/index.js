import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomePage from './landing_page/home/Homepage';
import Signup from './landing_page/signup/Signup';
import About from './landing_page/about/Aboutpage';
import Product from './landing_page/products/ProductsPage.js';
import Pricing from './landing_page/pricing/PricingPage.js';
import Support from './landing_page/support/SupportPage.js';
import Navbar from './landing_page/Navbar.js';
import NotFound from './landing_page/notFound.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/support' element={<Support />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
