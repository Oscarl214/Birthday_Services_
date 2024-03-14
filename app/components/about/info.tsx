import React from 'react';
import Image from 'next/image';
const Info = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around m-5">
      <div className="flex flex-col justify-center items-center text-center md:w-1/2 mt-7">
        <h2 className="lg:text-5xl text-black text-3xl font-bold text-start">
          Our Purpose{' '}
        </h2>
        <p className="text-xl text-black m-4">
          Welcome to Party Knight Rentals, your trusted source for all your
          party rental needs in Austin, Texas! We are a dedicated team of party
          enthusiasts committed to making your events a bouncing success.
          Whether youre hosting a birthday party, a family reunion, or
          celebrating your kids achievements, our inventory of bounce houses,
          tables, and chairs is sure to impress! Safety is our top priority,
          which is why all our bounce houses are manufactured to the highest
          industry standards and regularly inspected for quality assurance. Our
          tables and chairs are sturdy, comfortable, and perfect for
          accommodating your guests. With Party Knight Rentals, you can count on
          reliable and punctual delivery, ensuring your rentals are set up and
          ready to go when your party starts. We take pride in providing
          exceptional customer service, working closely with you to understand
          your event needs and offering personalized recommendations to make
          your vision a reality. Let us be your party knights in shining armor,
          transforming ordinary gatherings into extraordinary memories. Contact
          Party Knight Rentals today and let the bouncing adventures begin!
        </p>
      </div>
      <Image
        src="https://partyservices.s3.us-east-2.amazonaws.com/GreetingsAustin.jpg"
        alt="Bounce House"
        width="950"
        height="700"
        className="cursor-pointer  "
        priority
      />
    </div>
  );
};

export default Info;
