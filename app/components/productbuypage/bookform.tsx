import React from 'react';

const BookForm = () => {
  return (
    <div>
      <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-center lg:text-6xl text-black m-5">
        Book Now
      </h3>
      <p className="mb-8 font-light text-center text-black text-xl lg:text-2xl">
        In order to book, please fill out the Rental Request form through the
        link provided below. We will contact you soon after to confirm
        availability and details.{' '}
      </p>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSf19FYJkdVp2IxVoGCy7OtWL5MdZ9yhR2oejR3zlsjRS2GyHg/viewform?embedded=true"
        width="100%"
        height="1695"
      >
        Loading…
      </iframe>
    </div>
  );
};

export default BookForm;
