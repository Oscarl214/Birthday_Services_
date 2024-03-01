import React from 'react';

const MainHero = () => {
  return (
    <div
      className="hero min-h-screen  border border-bottom border-black  "
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(https://partyservices.s3.us-east-2.amazonaws.com/Kidsbg.jpg)',
      }}
    >
      <div className="p-8">
        <h1 className="lg:font-rubik font-extrabold text-4xl text-white text-center lg:text-6xl ">
          Bounce Into Some Fun with <br /> Party Knight Rentals
        </h1>
        <p className=" sm:text-xl text-center lg:text-xl font-semibold p-5 text-white">
          Inflatables and Party Rental Needs-ATX AND SURROUNDING AREAS
        </p>
      </div>
    </div>
  );
};

export default MainHero;
