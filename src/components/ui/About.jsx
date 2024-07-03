import React from "react";
import Image from "next/image";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
});

const About = () => {
  return (
    <section className="pt-[60px] pb-16">
      <section className="container">
        <p
          className={`text-center text-3xl md:text-4xl font-bold  ${gfrib.className} font-bold text-myellow`}
        >
          Quem somos
          <br />
          <br />
        </p>
        <section className="lg:flex md:items-center">
          <article aria-label="Related Image" className="mr-8">
            <Image
              src="/lu/lu_pointing3.png"
              alt="CEO photo"
              width={200}
              height={200}
              className="rounded-lg w-full mb-8"
            />
          </article>
          <article className="lg:text-left">
            <p
              className={`text-3xl  md:text-4xl font-bold  ${gfrib.className} font-bold text-myellow`}
            >
              Somos um time experiente
              <br />
              <br />
            </p>
            <p className="text-lg lg:2xl">
              Contamos com mais de 25 anos de experiência no ramo de shows e
              eventos.
            </p>
            <br />
            <section className="text-lg lg:2xl">
              <p>
                A 1001 fornece para seu evento profissionais na área de
                fiscalização operacional, coordenação de pessoal (segurança,
                bombeiros, limpeza e produção).
              </p>
              <br />
              <p>
                Também nos destacamos para sua comodidade com uma equipe de
                carregadores para o desembarque e embarque de materiais de
                montagem ou exposição, fazendo assim os trabalhos fluírem dentro
                dos prazos determinados.
              </p>
              <br />
              <p>
                Somos a empresa oficial e referência de carregadores nos grandes
                eventos ABUP E MARA CAKES FAIR.
              </p>
              <br />
              <p>
                A 1001 EVENTOS agradece sua atenção e esperamos seu contato para
                futuros trabalhos!! Obrigado.
              </p>
            </section>
          </article>
          <br />
        </section>
      </section>
    </section>
  );
};

export default About;
