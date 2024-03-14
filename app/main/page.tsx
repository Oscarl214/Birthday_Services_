import React from 'react';
import MainHero from '../components/main/hero';
import Hook from '../components/main/hook';
import AboutUsHero from '../components/main/contactus';
import TitleImage from '../components/main/image';
import AboutUsMain from '../components/main/aboutusmain';

const Main = () => {
  return (
    <div>
      <MainHero />
      <Hook />
      <AboutUsHero />
      <TitleImage />
      <div className="bg-black">
        <AboutUsMain />
      </div>
    </div>
  );
};

export default Main;
