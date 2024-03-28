import React from 'react';

const HeroOfferings = () => {
  return (
    <div
      className="hero min-h-screen-policy  border border-bottom border-black "
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(https://partyservices.s3.us-east-2.amazonaws.com/ballons.webp)',
      }}
    >
      <h1 className="lg:font-rubik mt-10 font-extrabold text-4xl text-white text-center lg:text-7xl ">
        Explore the Collection
      </h1>
    </div>
  );
};

export default HeroOfferings;
