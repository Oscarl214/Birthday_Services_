import React from 'react';

const MainHero = () => {
  return (
    <div
      className="hero min-h-screen  border border-bottom border-black "
      style={{
        backgroundImage:
          'url(https://partyservices.s3.us-east-2.amazonaws.com/GreetingsAustin.jpg)',
      }}
    >
      <h1>Party Rental Knights Welcomes you</h1>
    </div>
  );
};

export default MainHero;
