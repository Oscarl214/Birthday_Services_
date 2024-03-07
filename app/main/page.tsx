import React from 'react';
import Image from 'next/image';
import MainHero from '../components/Main/hero';
import Hook from '../components/Main/hook';
import AboutUsHero from '../components/Main/aboutus';
import TitleImage from '../components/Main/image';
import ContactUsMain from '../components/Main/contactus';

const Main = () => {
  return (
    <div className=" pt-9">
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
