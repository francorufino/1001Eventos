import React from "react";
import Image from "next/image";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
});

const eventos = [
  { src: "/eventos/1.jpg", label: "Carregadores" },
  { src: "/eventos/5.jpg", label: "Coordenação" },
  { src: "/eventos/6.jpg", label: "Carregadores" },
  { src: "/eventos/40.jpeg", label: " 40" },
  { src: "/eventos/41.jpeg", label: " 41" },
  { src: "/eventos/8.jpg", label: "Carregadores" },
  { src: "/eventos/2.jpg", label: " 2" },
  { src: "/eventos/47.jpeg", label: " 47" },
  { src: "/eventos/10.png", label: " 10" },
  { src: "/eventos/11.jpg", label: "Carregadores" },
  { src: "/eventos/12.jpg", label: "Carregadores" },
  { src: "/eventos/13.jpg", label: " 13" },
  { src: "/eventos/14.jpeg", label: " 14" },
  { src: "/eventos/51.jpeg", label: " 51" },
  { src: "/eventos/28.png", label: " 28" },
  { src: "/eventos/38.jpeg", label: " 38" },
  { src: "/eventos/28a.png", label: " 29" },
  { src: "/eventos/30.jpeg", label: " 30" },
  { src: "/eventos/31.png", label: " 31" },
  { src: "/eventos/32.jpeg", label: " 32" },
  { src: "/eventos/3.png", label: " 3" },
  { src: "/eventos/33.jpeg", label: " 33" },
  { src: "/eventos/34.jpeg", label: " 34" },
  { src: "/eventos/35.jpeg", label: " 35" },
  { src: "/eventos/36.jpeg", label: " 36" },
  { src: "/eventos/37.jpeg", label: " 37" },
  { src: "/eventos/39.jpeg", label: " 39" },
  { src: "/eventos/42.jpeg", label: " 42" },
  { src: "/eventos/43.png", label: " 43" },
  { src: "/eventos/44.png", label: " 44" },
  { src: "/eventos/24.jpg", label: " 24" },
  { src: "/eventos/7.png", label: "Carregadores" },
  { src: "/eventos/46.jpeg", label: " 46" },
  { src: "/eventos/46a.png", label: " 46" },
  { src: "/eventos/49.jpeg", label: " 49" },
  { src: "/eventos/50.jpeg", label: " 50" },
  { src: "/eventos/52.png", label: " 52" },
  { src: "/eventos/9.png", label: " 9" },
  { src: "/eventos/15.png", label: " 15" },
  { src: "/eventos/19.png", label: " 19" },
  { src: "/eventos/21.png", label: " 21" },
  { src: "/eventos/0.jpeg", label: "Neymar" },
  { src: "/eventos/18.png", label: "Adriane Galisteu" },
  { src: "/eventos/25.jpg", label: " 25" },
  { src: "/eventos/26.png", label: " 26" },
  { src: "/eventos/27.png", label: " 27" },
  { src: "/eventos/20.png", label: "Sérgio Malandro" },
  { src: "/eventos/45.png", label: " Arnold Schwarzenegger" },
  { src: "/eventos/16.png", label: "Chris Flores" },
  { src: "/eventos/17.png", label: "Nizo Neto" },
  { src: "/eventos/18.png", label: "Adriane Galisteu" },
  { src: "/eventos/22.png", label: "Pyong Lee " }
];

const Gallery = () => {
  return (
    <section className="container pt-[50px] pb-8">
      <p
        className={`text-3xl md:text-4xl   font-bold mb-20 ${gfrib.className} text-center text-myellow font-bold `}
      >
        Galeria de fotos
      </p>

      <section className="flex flex-wrap justify-center">
        {eventos.map((evento, index) => (
          <article
            key={index}
            aria-label="Related Image"
            className="relative w-80 h-80 rounded-sm m-4 bg-mwhite"
          >
            <Image
              src={evento.src}
              layout="fill"
              objectFit="cover"
              className="rounded-lg px-2 pt-2 pb-14"
              alt="photos of events"
              priority
            />
            <div className="absolute inset-x-0 bottom-0  bg-opacity-50 text-mblack text-center pb-5">
              <p className="text-sm">{evento.label}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Gallery;
