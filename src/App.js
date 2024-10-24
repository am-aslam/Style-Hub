// src/App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./Components/Header/Navbar"; // Adjust path if necessary
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import ProductDetail from "./pages/Shop/Cart.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Shop/Cart.jsx";
import ProductDetails from "../src/pages/Shop/ProductDetails.jsx";
const App = () => {// Fix the missing variable name

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
         <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
