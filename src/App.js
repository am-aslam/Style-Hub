import React from 'react';
import Header from './Components/Header/Navbar';
import Banner from './Components/Banner/Home';
import FashionTrends from './Components/FashionTrends/FashionTrends';
import OfferSection from './Components/OfferSection/OfferSection';
import FashionBlog from './Components/FashionBrands/FashionBrands';
import FashionBrands from './Components/FashionBlog/FashionBlog';
import Middle from './Components/Middle/Middle';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <FashionTrends />
      <OfferSection />
      <FashionBlog />
      <FashionBrands />
      <Middle/>
      <Footer />
    </div>
  );
};














export default App;
