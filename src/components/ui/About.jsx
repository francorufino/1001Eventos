import React from "react";
import Image from "next/image";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});

const About = () => {
  return (
    <section className="pt-[130px] shadow-lg ">
      <section className="container">
        <section className="flex flex-wrap justify-center items-center shadow-lg ">
          <article className="flex-1 mr-3">
            <p className={`text-3xl font-bold  ${gfrib.className}`}>
              Quem somos
            </p>
            {/* <p>
              Nós somos uma empresa líder na produção e coordenação de eventos
              no Brasil. Oferecemos uma ampla gama de serviços para atender a
              todas as necessidades do seu evento: Produção, Coordenação,
              Segurança, Transporte e Controle do início ao fim, para garantir
              que tudo saia como planejado.
            </p>{" "}
            <br />
            <p>
              Na 1001 Eventos, nos esforçamos para tornar cada evento único e
              memorável para nossos clientes. Cuidamos de cada detalhe para que
              você possa brilhar e aproveitar o momento sem preocupações.
            </p> */}
            <p>
              <br />
              Somos líderes na produção e coordenação de eventos no Brasil,
              oferecendo serviços completos de produção, coordenação, segurança,
              transporte e controle. Na 1001 Eventos, garantimos que seu evento
              seja único e memorável, cuidando de cada detalhe para que você
              possa aproveitar sem preocupações.
            </p>
            <br />
            <h2 className={`text-3xl font-bold mb-2 ${gfrib.className}`}>
              Nossa Experiência
            </h2>
            <br />
            <p>
              Com mais de 30 anos de experiência na indústria de eventos, temos
              o privilégio de ser uma referência desse setor no mercado. Durante
              essas décadas, atendemos uma ampla variedade de eventos, desde
              pequenas convenções até grandes eventos em grandes pavilhões, como
              os pavilhões do Expo Center Norte, por exemplo .
            </p>
            <br />
            <p>
              Nossa equipe altamente treinada é especializada em superar
              expectativas. Trabalhamos incansavelmente para garantir que cada
              detalhe seja cuidadosamente planejado e executado, resultando em
              eventos memoráveis e de sucesso para nossos clientes.
            </p>
            {/* 
            <p>
              Com mais de 30 anos de experiência, somos uma referência na
              indústria de eventos. Atendemos desde pequenas convenções até
              grandes eventos em locais como o Expo Center Norte. Nossa equipe
              altamente treinada se dedica a superar expectativas, cuidando de
              cada detalhe para garantir eventos memoráveis e bem-sucedidos para
              nossos clientes.
            </p> */}
          </article>
          <article
            aria-label="Related Image"
            className="flex-1 mb-8 justify-center flex"
          >
            <Image
              src="/lu/lu-standing.jpg"
              alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </article>{" "}
          <br />
        </section>
      </section>
    </section>
  );
};

export default About;
