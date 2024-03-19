'use client';

import React from 'react';
import FAQDATA from '../../faqData.json';
import Image from 'next/image';
const Questions = () => {
  return (
    <div className="flex flex-col font-rubik text-black m-5">
      <p className="text-center m-5">
        We have compiled a list of the most frequently asked questions by our
        customers. If you do not find the answer to your question below, please
        email us at{' '}
        <a className="text-red-500" href="mailto:info@partyknightrentals.com">
          info@partyknightrentals.com
        </a>{' '}
        with your questions, and we will respond within 24 hours.{' '}
      </p>
      {FAQDATA.map((question) => (
        <div
          key={question.id}
          className="text-center flex flex-col justify-center"
        >
          <h2 className="text-2xl lg:text-5xl text-red-500 underline">
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
