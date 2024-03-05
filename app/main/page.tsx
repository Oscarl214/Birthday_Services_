import React from 'react';
import Image from 'next/image';
import MainHero from '../components/Main/hero';
import Hook from '../components/Main/hook';
import AboutUs from '../components/Main/aboutus';

const Main = () => {
  return (
    <div className=" pt-9">
      <MainHero />
      <Hook />
      <AboutUs />
    </div>
  );
};

export default Main;
