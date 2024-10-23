import React from 'react'
import Banner from '../../Components/Banner/Home'
import FashionTrends from '../../Components/FashionTrends/FashionTrends'
import OfferSection from '../../Components/OfferSection/OfferSection'
import FashionBlog from '../../Components/FashionBrands/FashionBrands'
import FashionBrands from '../../Components/FashionBlog/FashionBlog'
import Middle from '../../Components/Middle/Middle'

function Home() {
  return (
    <>
            <Banner />
              <FashionTrends />
              <OfferSection />
              <FashionBlog />
              <FashionBrands />
              <Middle />
    </>
  )
}

export default Home