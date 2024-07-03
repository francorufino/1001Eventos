"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`container mx-auto flex flex-wrap items-center justify-between   text-myellow bg-mblack ${gfrib.className}`}
    >
      <div className="flex items-center flex-shrink-0 mr-4 ">
        <Link href="#herosection">
          <Image
            src={"/logo/logo.png"}
            alt="logo"
            width={100}
            height={100}
            className=""
          />
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 border rounded text-myellow border-myellow hover:text-mwhite hover:border-mwhite"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow lg:text-right">
          <Link
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 text-myellow hover:text-mwhite mr-4"
          >
            Sobre
          </Link>
          <Link
            href="#services"
            className="block mt-4 lg:inline-block lg:mt-0 text-myellow hover:text-mwhite mr-4"
          >
            Serviços
          </Link>
          <Link
            href="#gallery"
            className="block mt-4 lg:inline-block lg:mt-0 text-myellow hover:text-mwhite mr-4"
          >
            Galeria
          </Link>
          <Link
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 text-myellow hover:text-mwhite mr-4"
          >
            Contato
          </Link>
          <Link
            href="#login"
            className="block mt-4 lg:inline-block lg:mt-0 text-myellow hover:text-mwhite"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
