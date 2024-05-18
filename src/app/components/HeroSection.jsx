import React from "react";
import Image from "next/image";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});

const HeroSection = () => {
  return (
    <section className="container flex justify-between">
      <section className={`text-6xl mt-32 flex flex-col ${gfrib.className}`}>
        <p>Experiencias únicas</p>
        <p>Eventos expepcionais</p>
      </section>
      <section className="flex-shrink-0 -mt-6 flex mr-12 ">
        <Image
          src={"/icons/spotlight.png"}
          width={300}
          height={300}
          className="text-mblack flex "
        />
      </section>
    </section>
  );
};

export default HeroSection;
