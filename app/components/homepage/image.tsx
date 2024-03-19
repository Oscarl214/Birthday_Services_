import React from 'react';
import Image from 'next/image';
const TitleImage = () => {
  return (
    <div>
      <Image
        src="https://partyservices.s3.us-east-2.amazonaws.com/PARTY+KNIGHT+RENTALS+(1).svg"
        alt="Party Rental Knights"
        width="1800"
        height="800"
        className="cursor-pointer  lg:ml-10  p-2"
      />
    </div>
  );
};

export default TitleImage;
