import React from "react";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});

const HeroSection = () => {
  return (
    <section id="herosection" className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/herosection/concert.mp4" type="video/mp4" />
      </video>
      <div class="absolute inset-0 flex items-end justify-end">
        <span class="bg-mblack opacity-60 w-full h-full  object-cover "></span>
      </div>
      <section
        className={`relative z-10 flex flex-col items-center justify-center h-full text-white ${gfrib.className}`}
      >
        <p className="text-8xl text-center flex flex-wrap text-myellow">
          Experiências únicas
        </p>
        <br />
        <p className="text-8xl text-center flex flex-wrap text-myellow">
          Eventos excepcionais
        </p>
      </section>
    </section>
  );
};

export default HeroSection;
