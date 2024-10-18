import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Navbar';
import Banner from './Components/Banner/Home';
import FashionTrends from './Components/FashionTrends/FashionTrends';
import OfferSection from './Components/OfferSection/OfferSection';
import FashionBlog from './Components/FashionBrands/FashionBrands';
import FashionBrands from './Components/FashionBlog/FashionBlog';
import Middle from './Components/Middle/Middle';
import Footer from './Components/Footer/Footer';
import About from './pages/About/About';  // Import the About component
import Shop from './pages/Shop/Shop';  // Import the Shop component

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header/>
        
        {/* Define routes for each page */}
        <Routes>
          <Route path="/" element={
            <>
              <Banner />
              <FashionTrends />
              <OfferSection />
              <FashionBlog />
              <FashionBrands />
              <Middle />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
