"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  BaggageClaim,
  Headset,
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
    <section id="services" className="container pt-[150px] mx-auto px-4 mb-8">
      <p className={`text-3xl font-bold mb-8 ${gfrib.className}`}>
        Nossos Serviços
      </p>

      <section className="text-center justify-center gap-4">
        <section
          aria-label="icones dos serviços prestados"
          className="flex justify-center gap-8 mb-8"
        >
          <article aria-label="icones dos serviços prestados">
            <Card className="w-[350px] flex justify-center flex-col text-center">
              <CardHeader>
                <CardTitle>Transporte</CardTitle>
                <CardDescription>
                  Gerenciamos o transporte de equipamentos e materiais para que
                  cheguem no prazo e em perfeitas condições.{" "}
                </CardDescription>
              </CardHeader>
              <section className="flex justify-center">
                <CardContent>
                  {" "}
                  <BaggageClaim
                    alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
                    width={250}
                    height={100}
                  />{" "}
                </CardContent>{" "}
              </section>
            </Card>
          </article>

          <article aria-label="icones dos serviços prestados">
            <Card className="w-[350px] flex justify-center flex-col text-center">
              <CardHeader>
                <CardTitle>Segurança</CardTitle>
                <CardDescription>
                  A segurança de nossos clientes e participantes é nossa
                  prioridade. Temos uma equipe de profissionais treinados para
                  garantir um ambiente seguro em todos os momentos.{" "}
                </CardDescription>
              </CardHeader>
              <section className="flex justify-center">
                <CardContent>
                  {" "}
                  <Headset
                    alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
                    width={250}
                    height={100}
                  />
                </CardContent>{" "}
              </section>
            </Card>
          </article>

          <article aria-label="icones dos serviços prestados">
            <Card className="w-[350px] flex justify-center flex-col text-center">
              <CardHeader>
                <CardTitle>Produção</CardTitle>
                <CardDescription>
                  {" "}
                  Do planejamento inicial até a execução do evento, cuidamos de
                  todos os aspectos da produção para garantir que tudo saia
                  perfeito.
                </CardDescription>
              </CardHeader>
              <section className="flex justify-center">
                <CardContent>
                  {" "}
                  <ClipboardList
                    alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
                    width={250}
                    height={100}
                  />
                </CardContent>{" "}
              </section>
            </Card>
          </article>
        </section>
        <section
          aria-label="icones dos serviços prestados"
          className="flex justify-center gap-8 mb-8"
        >
          <article aria-label="icones dos serviços prestados">
            <Card className="w-[350px] flex justify-center flex-col text-center">
              <CardHeader>
                <CardTitle>Controle</CardTitle>
                <CardDescription>
                  Mantemos o controle total durante todo o evento para garantir
                  que tudo funcione conforme o planejado.{" "}
                </CardDescription>
              </CardHeader>
              <section className="flex justify-center">
                <CardContent>
                  {" "}
                  <SearchCheck
                    alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
                    width={250}
                    height={100}
                  />
                </CardContent>{" "}
              </section>
            </Card>
          </article>

          <article aria-label="icones dos serviços prestados">
            <Card className="w-[350px] flex justify-center flex-col text-center">
              <CardHeader>
                <CardTitle>Outro Serviço</CardTitle>
                <CardDescription>Descricao do outro serviço</CardDescription>
              </CardHeader>
              <section className="flex justify-center">
                <CardContent>
                  {" "}
                  <Headset
                    alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
                    width={250}
                    height={100}
                  />
                </CardContent>{" "}
              </section>
            </Card>
          </article>

          <article aria-label="icones dos serviços prestados">
            <Card className="w-[350px] flex justify-center flex-col text-center">
              <CardHeader>
                <CardTitle>Outro serviço</CardTitle>
                <CardDescription>Descricao do outro serviço</CardDescription>
              </CardHeader>
              <section className="flex justify-center">
                <CardContent>
                  {" "}
                  <ClipboardList
                    alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
                    width={250}
                    height={100}
                  />
                </CardContent>{" "}
              </section>
            </Card>
          </article>
        </section>
      </section>
    </section>
  );
};

export default Servicos;
