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
  { src: "/eventos/40.jpeg", label: " Organização - Evento Arnold" },
  {
    src: "/eventos/41.jpeg",
    label: " Empresa Oficial - Abup"
  },
  { src: "/eventos/8.jpg", label: "Carregadores" },
  { src: "/eventos/2.jpg", label: " Empresa Oficial - Abup" },
  { src: "/eventos/47.jpeg", label: " Empresa Oficial - Abup" },
  { src: "/eventos/10.png", label: " Organização - Evento Apas " },
  { src: "/eventos/11.jpg", label: "Carregadores" },
  { src: "/eventos/12.jpg", label: "Carregadores" },
  { src: "/eventos/13.jpg", label: " Distribuição de mobiliário " },
  { src: "/eventos/14.jpeg", label: " Produção " },
  { src: "/eventos/51.jpeg", label: " Marcações de Eventos" },
  { src: "/eventos/28.png", label: " Fiscalização e Produção " },
  { src: "/eventos/38.jpeg", label: " Produção e Fiscalização" },
  { src: "/eventos/28a.png", label: " Fiscalização e Produção" },
  { src: "/eventos/30.jpeg", label: " Expo Revestir " },
  { src: "/eventos/31.png", label: " Marcação do Sambódromo  " },
  { src: "/eventos/32.jpeg", label: " Produção e Fiscalização" },
  { src: "/eventos/3.png", label: " Coordenação" },
  { src: "/eventos/33.jpeg", label: " Coordenação - CBTD" },
  { src: "/eventos/34.jpeg", label: " Carga e Descarga" },
  { src: "/eventos/35.jpeg", label: "  Produção " },
  { src: "/eventos/36.jpeg", label: "  Produção " },
  { src: "/eventos/37.jpeg", label: " Família 1001 Eventos" },
  { src: "/eventos/39.jpeg", label: " Equipe Operacional Apas" },
  { src: "/eventos/42.jpeg", label: " Carregares Oficial - Abup " },
  { src: "/eventos/43.png", label: " Família 1001 Eventos" },
  { src: "/eventos/44.png", label: " Coordenadores - 1001 Eventos" },
  { src: "/eventos/24.jpg", label: " Hospitalidade de VIPs" },
  { src: "/eventos/7.png", label: "Carregadores" },
  { src: "/eventos/46.jpeg", label: " Carregadores Oficial " },
  { src: "/eventos/46a.png", label: " Carregadores Oficial " },
  {
    src: "/eventos/49.jpeg",
    label: " Produção - Brazil Promotion "
  },
  { src: "/eventos/50.jpeg", label: " Ladico Evento" },
  {
    src: "/eventos/52.png",
    label: " Anhembi - onde tudo começou"
  },
  { src: "/eventos/53.png", label: " Amigos - Da2 Eventos " },
  { src: "/eventos/9.png", label: " Produção - RD Notáveis " },
  { src: "/eventos/15.png", label: " Danilo Gentili" },
  { src: "/eventos/19.png", label: " Henri Castelli" },
  { src: "/eventos/21.png", label: " Jogador Souza " },
  { src: "/eventos/0.jpeg", label: "Neymar" },
  { src: "/eventos/18.png", label: "Adriane Galisteu" },
  {
    src: "/eventos/25.jpg",
    label: " Coord. Segurança - Projota"
  },
  { src: "/eventos/26.png", label: " Helen Ganzarolii" },
  {
    src: "/eventos/27.png",
    label: " Medalhista Olímpico Xuxa"
  },
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
        className={`text-3xl md:text-4xl font-bold mb-12 xl:mb-20 ${gfrib.className} text-center text-myellow font-bold `}
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
              alt={evento.label}
              priority
            />
            <div className="absolute inset-x-0 bottom-0  bg-opacity-50 text-mblack font-semibold text-center pb-5">
              <p className="text-sm">{evento.label}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Gallery;
