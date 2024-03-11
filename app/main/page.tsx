import React from 'react';
import Image from 'next/image';
import MainHero from '../components/main/hero';
import Hook from '../components/main/hook';
import AboutUsHero from '../components/main/contactus';
import TitleImage from '../components/main/image';
import AboutUsMain from '../components/main/aboutusmain';
import { MotionDiv } from '../components/main/motion';

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
