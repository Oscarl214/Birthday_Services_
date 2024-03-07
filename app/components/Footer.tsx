import React from 'react';
import Link from 'next/link';

import Image from 'next/image';
import Logo from '../../public/Logo.webp';

import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center m-5">
      <Image
        src={Logo}
        alt="Logo"
        width="100"
        height="100"
        className="cursor-pointer about-usimage lg:ml-10 "
      />
      <div className="flex justify-center ">
        <ul>
          <li className="text-center text-4xl">
            <AiOutlineInstagram className=" text-center text-red-500" />
          </li>
          <li>
            <a href="mailto:info@partyknightrentals.com">
              info@partyknightrentals.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
