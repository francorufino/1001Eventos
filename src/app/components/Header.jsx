import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <header className="w-full h-[120px] bg-mblack">
        <section className="container m-auto py-600 flex justify-between  items-center">
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
            <Image
              src={"/icons/icons8-whatsapp-100.svg"}
              alt="whatsapp icon click here to send a whatsapp message"
              width={50}
              height={50}
            />
            <span className="ml-8 hover:text-myellow">Sobre</span>
            <span className="ml-8 hover:text-myellow">Seriços</span>
            <span className="ml-8 hover:text-myellow">Contato</span>
            <span className="ml-8 hover:text-myellow">Galeria</span>
            <span className="ml-8 hover:text-myellow">Login</span>
          </section>
        </section>
      </header>
    </>
  );
};

export default Header;
