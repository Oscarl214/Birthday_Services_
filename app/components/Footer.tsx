import React from 'react';

import Image from 'next/image';
import Logo from '../../public/Logo.webp';
import Link from 'next/link';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Link href={'/'}>
        <Image
          src={Logo}
          alt="Logo"
          width="100"
          height="100"
          className="cursor-pointer text-center "
        />
      </Link>
      <ul className="m-5 flex flex-col justify-center items-center">
        <a href="mailto:info@partyknightrentals.com">
          <li className="m-1">info@partyknightrentals.com</li>
        </a>
      </ul>
      <div className="flex justify-center">
        <Link
          href="https://www.instagram.com/partyknightrentals512/?igsh=N3ViOXkwYmYxc3J0"
          target="_blank"
        >
          <AiOutlineInstagram size={40} className=" text-red-700" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
