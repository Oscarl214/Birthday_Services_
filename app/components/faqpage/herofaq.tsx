import React from 'react';

const HeroFaq = () => {
  return (
    <div className=" border border-bottom border-black bg-black">
      <h3 className="lg:font-rubik mt-10 m-5 font-extrabold text-xl text-white text-center lg:text-5xl ">
        We have compiled a list of the most frequently asked questions by our
        customers. If you do not find the answer to your question below, please
        email us at{' '}
        <a href="mailto:info@partyknightrentals.com" className="text-red-500">
          info@partyknightrentals.com
        </a>{' '}
        with your questions, and we will respond within 24 hours.
      </h3>
    </div>
  );
};

export default HeroFaq;
