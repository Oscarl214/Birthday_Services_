import React from 'react';

const Hook = () => {
  return (
    <div className="second-main hook-space ">
      <ul className="text-center">
        <li className="pb-4">
          <h2 className="lg:text-6xl text-2xl font-rubik font-extrabold text-black ">
            <a className="text-red-500">#1</a>In Austin,Tx
          </h2>
        </li>
        <li className="pb-4">
          <h2 className="lg:text-6xl text-2xl font-rubik font-extrabold text-black">
            <a className="text-red-500">#1</a> In Inflatables
          </h2>
        </li>
        <li className="pb-4">
          <h2 className="lg:text-6xl text-2xl font-rubik font-extrabold text-black">
            <a className="text-red-500">#1</a> In Quality Party Rental Needs
          </h2>
        </li>
        <li className="m-4">
          <h3 className="text-black lg:text-2xl text-lg">
            We Listen. We Provide. We Party.
          </h3>
        </li>
      </ul>
      <div className="flex items-center justify-center mt-9">
        <button className="border-black border-2 border-solid  p-3 lg:text-md text-sm font-semibold text-black hover:bg-red-400 rounded-full hook-button">
          HIRE US
        </button>
      </div>
    </div>
  );
};

export default Hook;
