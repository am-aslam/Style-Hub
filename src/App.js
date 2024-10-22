// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header/Navbar"; // Adjust path if necessary
import Banner from "./Components/Banner/Home";
import CardProvider from "./pages/Shop/CardProvider.jsx"; // Adjust path if necessary
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import CartButton from "./pages/Shop/CartButton.jsx";
import ProductDetail from "./pages/Shop/ProductDetail.jsx";
import Footer from "./Components/Footer/Footer.jsx"; // Adjust path if necessary
import FashionTrends from "../src/Components/FashionTrends/FashionTrends.jsx";
import OfferSection from "../src/Components/OfferSection/OfferSection.jsx";
import FashionBlog from "../src/Components/FashionBlog/FashionBlog.jsx";
import FashionBrands from "../src/Components/FashionBrands/FashionBrands.jsx";
import Middle from "../src/Components/Middle/Middle.jsx";

// Import other components...

const MainContent = () => {
  const location = useLocation(); // Fix the missing variable name

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <FashionTrends />
              <OfferSection />
              <FashionBlog />
              <FashionBrands />
              <Middle />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/another" element={<CartButton />} />
      </Routes>
      
      {/* Conditionally render Footer if not on '/another' route */}
      {location.pathname !== "/another" && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <CardProvider>
        <MainContent />
      </CardProvider>
    </Router>
  );
};

export default App;
