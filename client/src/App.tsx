import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio'
import Recipes from './pages/Recipes';
import React from 'react';
import './output.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
