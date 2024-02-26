'use client';
import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.webp';
import Link from 'next/link';
import { AiOutlineInstagram, AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

import { useState } from 'react';
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">
      <div className="flex justify-between text-black items-center h-full w-full px-4 2xl:px-16 ">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="65"
            height="75"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="./offerings">
              <li className="ml-10 uppercase hover:border-b hover:border-rose-500 text-xl">
                Offerings
              </li>
            </Link>
            <Link href="./faq">
              <li className="ml-10 uppercase hover:border-b hover:border-rose-500 border-red text-xl">
                FAQ
              </li>
            </Link>
            <Link href="./ourpolicy">
              <li className="ml-10 uppercase hover:border-b hover:border-rose-500 text-xl">
                Our Policy
              </li>
            </Link>
            <Link href="./contact">
              <li className="ml-10 uppercase hover:border-b hover:border-rose-500 text-xl">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? 'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="text-2xl mt-[70%]">
          <Link href="./">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-rose-500  "
              onClick={() => setMenuOpen(false)}
            >
              Home
            </li>
          </Link>
          <Link href="./offerings">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-rose-500  "
              onClick={() => setMenuOpen(false)}
            >
              Offerings
            </li>
          </Link>
          <Link href="./faq">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-rose-500  "
              onClick={() => setMenuOpen(false)}
            >
              FAQ
            </li>
          </Link>
          <Link href="./ourpolicy">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-rose-500  "
              onClick={() => setMenuOpen(false)}
            >
              Our Policy
            </li>
          </Link>
          <Link href="./contact">
            <li
              className="py-4 cursor-pointer hover:border-b hover:border-rose-500  "
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </li>
          </Link>
        </ul>
        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={40} className="cursor-pointer" />
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width="65"
              height="75"
              className="cursor-pointer pt-6 items-center object-center"
              priority
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
