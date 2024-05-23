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
    <>
      <section id="herosection" className="mt-[150px]">
        <section className="container justify-between items-center flex">
          <section
            className={`text-6xl flex my-auto flex-col  ${gfrib.className}`}
          >
            <p>Experiencias únicas</p>
            <p>Eventos expepcionais</p>
          </section>

          <section className="flex-shrink-0   ">
            <Image
              src="/herosection/1001Herosection.png"
              alt="Dancing "
              width={500}
              height={50}
              className="flex justify-end"
            />
          </section>
        </section>
      </section>
    </>
  );
};

export default HeroSection;
