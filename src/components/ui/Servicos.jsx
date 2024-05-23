"use client";
import React from "react";
import {
  BaggageClaim,
  Headset,
  Cone,
  Speaker,
  SearchCheck,
  ClipboardList
} from "lucide-react";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
});

const Servicos = () => {
  return (
    <section id="services" className="container pt-[150px] mx-auto px-4">
      <p className={`text-3xl font-bold mb-8 ${gfrib.className}`}>
        Nossos Serviços
      </p>
      <section className="flex flex-wrap justify-center gap-4">
        <article aria-label="Related Image">
          <BaggageClaim
            alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
            width={500}
            height={200}
          />
          <p>Transporte</p>
        </article>
        <article aria-label="Related Image">
          <Headset
            alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
            width={500}
            height={200}
          />
          <p>Segurança</p>
        </article>
        <article aria-label="Related Image">
          <ClipboardList
            alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
            width={500}
            height={200}
          />
          <p>Produção</p>
        </article>
        <article aria-label="Related Image">
          <SearchCheck
            alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
            width={500}
            height={200}
          />
          <p>Controle</p>
        </article>
        <article aria-label="Related Image">
          <Cone
            alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
            width={500}
            height={200}
          />
          <p>Iluminação</p>
        </article>
        <article aria-label="Related Image">
          <Speaker
            alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
            width={500}
            height={200}
          />
          <p>Som</p>
        </article>
      </section>
    </section>
  );
};

export default Servicos;
