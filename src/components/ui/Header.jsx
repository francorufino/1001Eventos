"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
});
//
const Header = () => {
  return (
    <>
      <nav
        className={`container  flex justify-between items-center py-2 text-myellow $ bg-mblack ${gfrib.className} `}
      >
        <section>
          <Link href="#herosection">
            <Image src={"/logo/logo.png"} alt="logo" width={100} height={100} />
          </Link>
        </section>
        <section className="flex items-center mb-2 ml-8 font-bold text-mwhite">
          <Link href="#about">
            <span className="ml-8 hover:text-myellow">Sobre</span>
          </Link>
          <Link href="#services">
            <span className="ml-8 hover:text-myellow">Serviços</span>
          </Link>

          <Link href="#gallery">
            <span className="ml-8 hover:text-myellow">Galeria</span>
          </Link>
          <Link href="#contact">
            <span className="ml-8 hover:text-myellow">Contato</span>
          </Link>
          <Link href="#login">
            <span className="ml-8 hover:text-myellow">Login</span>
          </Link>
        </section>
        <section>
          {" "}
          <Link href="#herosection">
            <Image
              src={"/icons/icons8-whatsapp-64.svg"}
              alt="whatsapp icon"
              width={50}
              height={50}
            />
          </Link>
        </section>
      </nav>
    </>
  );
};

export default Header;
