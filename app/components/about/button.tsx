import React from 'react';
import Link from 'next/link';
const Button = () => {
  return (
    <div className="flex items-center justify-center mt-9 md:flex-col">
      <Link href={'/contact'}>
        <button className="border-red-700 border-2 border-solid  p-3 lg:text-md text-sm font-semibold text-black hover:bg-red-400 rounded-full hook-button">
          CONTACT US
        </button>
      </Link>
    </div>
  );
};

export default Button;
