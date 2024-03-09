import React from 'react';
import Image from 'next/image';
import MainHero from '../components/main/hero';
import Hook from '../components/main/hook';
import AboutUsHero from '../components/main/aboutus';
import TitleImage from '../components/main/image';
import ContactUsMain from '../components/main/contactus';
import { MotionDiv } from '../components/main/motion';

const Main = () => {
  return (
    <div>
      <MainHero />
      <Hook />
      <AboutUsHero />
      <TitleImage />
      <div className="bg-black">
        <ContactUsMain />
      </div>
    </div>
  );
};

export default Main;
