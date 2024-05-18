import React from "react";
import { BaggageClaim } from "lucide-react";
import { Headset } from "lucide-react";
import { Cone } from "lucide-react";
import { ClipboardList } from "lucide-react";
import { Speaker } from "lucide-react";
import { SearchCheck } from "lucide-react";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});

const Servicos = () => {
  return (
    <section className="container">
      <p className={` ${gfrib.className}`}>Nossos Serviços</p>
      <section className="flex flex-wrap justify-center text-center font-bold text-xl gap-4 ">
        <article
          aria-label="Related Image"
          className="flex flex-col justify-center text-center"
        >
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
