import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import CardProvider from '../src/pages/Shop/CardContext' // Make sure the CartProvider is imported
import CartButton from '../src/pages/Shop/CartButton';

const App = () => {
  // const location = useLocation();
  return (
    <Router>
      <CardProvider>  {/* Wrap the entire app in CartProvider */}
        <div className="App">
          <Header />
          
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
            <Route path="/shop" element={<Shop />} />
            <Route path="/another" element={<CartButton />} />
          </Routes>
          <Footer />
          {/* {location.pathname !== '/another' && } */}
        </div>
      </CardProvider>
    </Router>
  );
};

export default App;
