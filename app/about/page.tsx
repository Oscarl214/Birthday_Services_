import React from 'react';
import AboutUsSection from '../components/about/abouussection';
import Info from '../components/about/info';
import Button from '../components/about/button';
const OurPolicy = () => {
  return (
    <div>
      <AboutUsSection />
      <Info />
      <div className="mt">
        <Button />
      </div>
    </div>
  );
};

export default OurPolicy;
