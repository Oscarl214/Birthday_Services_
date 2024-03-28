import React from 'react';
import HeroOfferings from '../components/offeringspage/heroofferings';
import ProductList from '../components/offeringspage/productlist';
import Stars from '../../public/stars.svg';
const Offerings = () => {
  return (
    <div>
      <HeroOfferings />

      <div
        style={{
          backgroundImage: `url(${Stars.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="lg:pt-[2%] pt-[1%]">
          <div className="">
            {' '}
            <ProductList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offerings;
