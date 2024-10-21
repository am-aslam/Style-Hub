// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Navbar'; // Adjust path if necessary
import Banner from './Components/Banner/Home';
import CardProvider from './pages/Shop/CardContext'; // Adjust path if necessary
import About from './pages/About/About';  
import Shop from './pages/Shop/Shop';  
import CartButton from './pages/Shop/CartButton.jsx';
import ProductDetail from './pages/Shop/ProductDetail.jsx';
// Import other components...

const MainContent = () => {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Banner />} />
                <Route path="/about" element={<About />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/another" element={<CartButton />} />
                <Route path="/product/:id" element={<ProductDetail />} />

            </Routes>
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
