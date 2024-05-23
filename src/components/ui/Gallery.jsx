import React from "react";
import Image from "next/image";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});

const eventos = [
  "/eventos/0.jpeg",
  "/eventos/1.jpg",
  "/eventos/2.jpg",

  "/eventos/5.jpg",
  "/eventos/6.jpg",
  "/eventos/7.jpg",
  "/eventos/8.jpg",
  "/eventos/9.jpg",
  "/eventos/11.jpg",
  "/eventos/12.jpg",
  "/eventos/13.jpg",
  "/eventos/14.jpg",
  "/eventos/15.jpg",
  "/eventos/16.jpg",
  "/eventos/17.jpg",
  "/eventos/18.jpg",
  "/eventos/19.jpg",
  "/eventos/20.jpg",
  "/eventos/21.jpg",
  "/eventos/22.jpg",
  "/eventos/23.jpg",
  "/eventos/24.jpg",
  "/eventos/25.jpg",
  "/eventos/26.jpg",
  "/eventos/27.jpg"
];

const Gallery = () => {
  return (
    <section className="container pt-[150px]">
      <p className={`text-3xl font-bold mb-8 ${gfrib.className}  text-myellow`}>
        Nossa galeria de fotos
      </p>
      <section className="flex flex-wrap justify-center">
        {eventos.map((evento, index) => (
          <article key={index} aria-label="Related Image">
            <Image
              src={evento}
              alt="Photo gallery of the multiple events done, with images of the setups to celebrities"
              width={200}
              height={200}
              className="m-2 rounded-lg flex p-0.5 bg-mblack"
            />
          </article>
        ))}
      </section>
    </section>
  );
};

export default Gallery;
