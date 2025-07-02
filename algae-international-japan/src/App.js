
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MotherVegetables from './pages/MotherVegetables';
import MVFactory from './pages/MVFactory';
import SustainableVision from './pages/SustainableVision';
import Shop from './pages/Shop';
import Company from './pages/Company';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mother-vegetables" element={<MotherVegetables />} />
        <Route path="/mv-factory" element={<MVFactory />} />
        <Route path="/sustainable-vision" element={<SustainableVision />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
