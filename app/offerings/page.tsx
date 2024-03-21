import React from 'react';
import HeroOfferings from '../components/offeringspage/heroofferings';
import ProductList from '../components/offeringspage/productlist';

const Offerings = () => {
  return (
    <div className="lg:pt-[10%] pt-[40%]">
      <HeroOfferings />
      <div className="pt-[5%]">
        {' '}
        <ProductList />
      </div>
    </div>
  );
};

export default Offerings;
