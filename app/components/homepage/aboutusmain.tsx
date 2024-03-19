import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const AboutUsMain = () => {
  return (
    <div className="flex flex-col md:flex-row text-white m-5 bg-black bg-cover">
      <div className="flex flex-col justify-center items-center text-center md:w-1/2 mt-7">
        <p className="about-us-text lg:text-lg text-sm font-semibold lg:mb-8 text-red-400 ">
          BEST IN THE INDUSTRY
        </p>
        <h3 className="about-us-text lg:text-5xl text-3xl  font-bold m-5">
          CHECK OUT OUR PRODUCTS
        </h3>
        <p className="text-lg mb-3 font-semibold text-red-400">
          Party Knight Rentals goes above and beyond to make sure that your
          event is unforgettable
        </p>
        <Link href={'/offerings'}>
          <button className="border-red-700 border-2 text-white border-solid  p-3 lg:text-md text-sm font-semibold text-black hover:bg-red-400 rounded-full hook-button">
            OFFERINGS
          </button>
        </Link>
      </div>
      <Image
        src="https://partyservices.s3.us-east-2.amazonaws.com/Kid+Jumping.webp"
        alt="Kid Jumping"
        width="650"
        height="700"
        className="cursor-pointer p-4 lg:ml-10 "
        priority
      />
    </div>
  );
};

export default AboutUsMain;
