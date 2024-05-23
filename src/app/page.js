"use client";
import React from "react";
import HeroSection from "../components/ui/HeroSection";
import About from "../components/ui/About";
import Gallery from "../components/ui/Gallery";
import Servicos from "../components/ui/Servicos";
import Contact from "../components/ui/Contact";
import { Montserrat_Alternates } from "next/font/google";

const gfmon = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  // variable: "--font-gfmon"
});
export default function Home() {
  return (
    <main className={`relative ${gfmon.className} `}>
      <section id="herosection">
        <HeroSection />
      </section>
      <section id="about" className="text-mwhite bg-mblack">
        <About />
      </section>
      <section id="services">
        <Servicos />
      </section>
      <section id="contact" className="text-mwhite bg-mblack">
        <Contact />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </main>
  );
}
