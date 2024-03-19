import React from 'react';

const HeroFaq = () => {
  return (
    <div
      className="hero min-h-screen-faq  border border-bottom border-black  "
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(https://partyservices.s3.us-east-2.amazonaws.com/FAQHERO.jpg)',
      }}
    >
      <h2 className="lg:font-rubik mt-10 font-bold text-4xl text-white text-center lg:text-7xl ">
        Frequently Asked Questions
      </h2>
    </div>
  );
};

export default HeroFaq;
