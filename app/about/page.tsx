import React from 'react';
import AboutUsSection from '../components/aboutpage/abouussection';
import Info from '../components/aboutpage/info';
import Button from '../components/aboutpage/button';
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
