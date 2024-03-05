import React from 'react';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row text-black m-5">
      <Image
        src="https://partyservices.s3.us-east-2.amazonaws.com/BounceHouse.webp"
        alt="Logo"
        width="650"
        height="700"
        className="cursor-pointer about-usimage lg:ml-10 "
        priority
      />
      <div className="flex flex-col justify-center items-center text-center md:w-1/2 mt-7">
        <p className="about-us-text lg:text-lg text-sm font-semibold lg:mb-8 text-gray-400">
          SERVING AUSTIN AND BEYOND
        </p>
        <h3 className="about-us-text lg:text-5xl text-3xl  font-bold">
          INFLATABLE INSTALLS
        </h3>
        <p className="text-lg m-5 font-semibold text-gray-400">
          Party Coming Up? Contact Us today by filling out this form to make a
          birthday memorable!
        </p>
        <button className="border-red-700 border-2 border-solid  p-3 lg:text-md text-sm font-semibold text-black hover:bg-red-400 rounded-full hook-button">
          HIRE US
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
