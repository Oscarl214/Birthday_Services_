'use client';

import React from 'react';
import FAQDATA from '../../faqData.json';
import Image from 'next/image';
const Questions = () => {
  return (
    <div className="flex flex-col font-rubik text-black m-5">
      <h1 className="text-2xl lg:text-5xl text-center font-thin text-black m-5">
        Frequently Asked Questions
      </h1>
      {FAQDATA.map((question) => (
        <div
          key={question.id}
          className="text-center flex flex-col justify-center"
        >
          <h2 className="text-2xl lg:text-5xl text-red-500">
            {question.Question}
          </h2>
          <p className="text-xl lg:text-2xl p-5">{question.Answer}</p>

          {question.Image && (
            <Image
              src={question.Image}
              alt="Bounce House"
              width="950"
              height="700"
              className="cursor-pointer  lg:ml-[25%] p-5"
              priority
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
