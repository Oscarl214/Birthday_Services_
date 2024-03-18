import React from 'react';
import Options from '../components/offerings/options';
import HeroOfferings from '../components/offerings/heroofferings';
import ProductList from '../components/offerings/productlist';
const Offerings = () => {
  return (
    <div className="lg:pt-[10%] pt-[30%]">
      <HeroOfferings />
      <div className="pt-[5%]">
        {' '}
        <ProductList />
      </div>
    </div>
  );
};

export default Offerings;
