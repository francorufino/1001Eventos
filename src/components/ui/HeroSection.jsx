import React from "react";
import { Ribeye_Marrow } from "next/font/google";
import "../../app/styles/custom.css";

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
        <source src="/videos/concert.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex items-end justify-end">
        <span className="bg-mblack opacity-60 w-full h-full object-cover"></span>
      </div>
      <section
        className={`relative lg:pt-48 z-10 flex flex-col items-center font-bold justify-center h-full text-white ${gfrib.className}`}
      >
        <p className="text-4xl md:text-8xl pt-32 md:pt-0  px-6 xl:pt-0 lg:text-8xl text-center font-bold flex flex-wrap text-myellow">
          1001 EVENTOS
        </p>
        <section className="relative h-32 w-full flex justify-center items-center">
          <span className="text-4xl md:text-6xl lg:text-7xl -mt-16 text-center font-bold text-mwhite myRotatingWords">
            Shows
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl -mt-16 text-center font-bold text-mwhite myRotatingWords">
            Palestras
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl -mt-8  text-center font-bold text-mwhite myRotatingWords">
            Eventos Coorporativos
          </span>
          <span className="text-4xl md:text-6xl lg:text-7xl -mt-16 text-center font-bold text-mwhite myRotatingWords">
            Exposições
          </span>
        </section>
      </section>
    </section>
  );
};

export default HeroSection;
