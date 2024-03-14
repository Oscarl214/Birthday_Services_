import React from 'react';

const MainHero = () => {
  return (
    <div
      className="hero min-h-screen-main  border border-bottom border-black  "
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(https://partyservices.s3.us-east-2.amazonaws.com/Kidsbg.jpg)',
      }}
    >
      <div className="p-10 mt-9">
        <h1 className="lg:font-rubik font-extrabold text-4xl text-white text-center lg:text-7xl ">
          Bounce Into Some Fun with <br />{' '}
          <a className="text-red-700">Party Knight Rentals</a>
        </h1>
        <p className=" sm:text-xl text-center lg:text-xl font-semibold p-5 pt-10 text-white">
          Inflatables and Party Rental Needs-AUSTIN AND SURROUNDING AREAS
        </p>
      </div>
    </div>
  );
};

export default MainHero;
