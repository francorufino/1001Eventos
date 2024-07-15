"use client";
import React from "react";
import Image from "next/image";
import {
  Card,
  // CardContent,
  CardDescription,
  CardHeader
  // CardTitle
} from "@/components/ui/card";

import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
});

const Servicos = () => {
  return (
    <>
      <section id="services" className="container pt-[50px] mx-auto px-4 pb-4">
        <p
          className={`text-3xl md:text-4xl font-bold mb-12 xl:mb-20 ${gfrib.className} text-center`}
        >
          Nossos Serviços
        </p>

        <section className="text-center justify-center gap-4">
          <section
            aria-label="icones dos serviços prestados"
            className="flex flex-wrap justify-center gap-8 mb-8"
          >
            <article
              aria-label="icones dos serviços prestados"
              className="flex flex-col justify-center text-center items-center"
            >
              <h1 className="bg-mblack text-mwhite w-full text-lg sm:text-2xl h-16 z-10 font-bold pt-5 flex flex-col ">
                Transporte
              </h1>
              <Card className="w-[280px] h-[200px] flex justify-center flex-col text-center -mt-4">
                <CardHeader>
                  {/* <CardTitle>Transporte</CardTitle> */}
                  <CardDescription className="font-[600]">
                    Transportamos com carregadores qualificados do seu caminhão
                    até o seu espaço de montagem ou retiramos do seu stand até
                    seu Transporte.{" "}
                  </CardDescription>
                </CardHeader>
              </Card>
              <Image
                width={300}
                height={300}
                src={"/logo/cart-1-01.webp"}
                priority
                alt="cart"
              />
            </article>
            <article
              aria-label="icones dos serviços prestados "
              className="flex flex-col justify-center text-center items-center"
            >
              <h1 className="bg-mblack text-mwhite w-full text-lg sm:text-2xl h-16 z-10 font-bold pt-5 flex  flex-col ">
                Produção
              </h1>
              <Card className="w-[280px] h-[200px] flex justify-center flex-col text-center -mt-4">
                <CardHeader>
                  {/* <CardTitle>Produção</CardTitle> */}
                  <CardDescription className="font-[600]">
                    {" "}
                    Contamos com produtores com vasta experiência no ramo de
                    eventos para a montagem e desmontagem de toda a
                    infraestrutura do seu Stand.
                  </CardDescription>
                </CardHeader>
              </Card>
              <section>
                <Image
                  width={300}
                  height={300}
                  src={"/logo/cart-1-01.webp"}
                  alt="cart"
                />
              </section>
            </article>

            <article
              aria-label="icones dos serviços prestados"
              className="flex flex-col justify-center text-center items-center"
            >
              <h1 className="bg-mblack text-mwhite w-full text-lg sm:text-2xl h-16 z-10 font-bold pt-5 flex  flex-col ">
                Coordenação
              </h1>
              <Card className="w-[280px] h-[200px] flex justify-center flex-col text-center -mt-4">
                <CardHeader>
                  {/* <CardTitle>Coordenação</CardTitle> */}
                  <CardDescription className="font-[600]">
                    Equipes com coordenadores responsáveis para fluir os
                    trabalhos e assim fazer chegar sua carga ou mercadoria de
                    exposição com rapidez e agilidade no seu espaço ou no seu
                    transporte{" "}
                  </CardDescription>
                </CardHeader>
                {/* <section className="flex justify-center">
                  <CardContent>
                    {" "}
                    <SearchCheck
                      alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
                      width={250}
                      height={100}
                    />
                  </CardContent>{" "}
                </section> */}
              </Card>
              <Image
                width={300}
                height={300}
                src={"/logo/cart-1-01.webp"}
                alt="cart"
              />
            </article>
          </section>
        </section>
      </section>
    </>
  );
};

export default Servicos;
