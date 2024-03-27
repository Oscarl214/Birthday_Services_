import React from 'react';
import HeroOfferings from '../components/offeringspage/heroofferings';
import ProductList from '../components/offeringspage/productlist';
import Stars from '../../public/stars.svg';
const Offerings = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Stars.src})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="lg:pt-[10%] pt-[40%]">
        <HeroOfferings />
        <div className="pt-[2%] m-5">
          {' '}
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Offerings;
