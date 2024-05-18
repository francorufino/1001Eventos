import React from "react";
import Image from "next/image";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});

const Header = () => {
  return (
    <>
      <header className={`w-full h-[120px] bg-mblack ${gfrib.className}`}>
        <section className="container flex justify-between items-center">
          <section className="flex flex-shrink-0">
            <Image
              src={"/logo/logo.png"}
              alt="logo"
              width={150}
              height={150}
              className="mt-8 z-10 "
            />
          </section>
          <section className=" flex items-center mb-8 ml-8 font-bold text-mwhite">
            {" "}
            <span className="ml-8 hover:text-myellow">Sobre</span>
            <span className="ml-8 hover:text-myellow">Seriços</span>
            <span className="ml-8 hover:text-myellow">Contato</span>
            <span className="ml-8 hover:text-myellow">Galeria</span>
            <span className="ml-8 hover:text-myellow">Login</span>
            <Image
              src={"/icons/icons8-whatsapp-64.svg"}
              alt="whatsapp icon click here to send a whatsapp message"
              width={50}
              height={50}
              className="ml-8"
            />
          </section>
        </section>
      </header>
    </>
  );
};

export default Header;
