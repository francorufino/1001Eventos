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
    <section className="pt-[150px]">
      <section className="container">
        <p className={`text-3xl font-bold mb-8 ${gfrib.className}`}>
          Quem somos
        </p>
        <article>
          <p>
            Nós somos uma empresa líder na produção e coordenação de eventos no
            Brasil. Na 1001 Eventos, nos esforçamos para tornar cada evento
            único e memorável para nossos clientes. Cuidamos de cada detalhe
            para que você possa brilhar e aproveitar o momento sem preocupações.
          </p>
          <h2>Nossos Serviços</h2>
          <p>
            Na 1001 Eventos, oferecemos uma ampla gama de serviços para atender
            a todas as necessidades do seu evento:
          </p>
          <p>
            <strong>Produção:</strong> Do planejamento inicial até a execução do
            evento, cuidamos de todos os aspectos da produção para garantir que
            tudo saia perfeito.
          </p>
          <p>
            <strong>Coordenação:</strong> Coordenamos cada detalhe do evento,
            desde logística até gerenciamento de equipe, para garantir uma
            experiência inesquecível.
          </p>
          <p>
            <strong>Segurança:</strong> A segurança de nossos clientes e
            participantes é nossa prioridade. Temos uma equipe de profissionais
            treinados para garantir um ambiente seguro em todos os momentos.
          </p>
          <p>
            <strong>Transporte:</strong> Gerenciamos o transporte de
            equipamentos e materiais para que cheguem no prazo e em perfeitas
            condições.
          </p>
          <p>
            <strong>Som:</strong> Cuidamos do som do seu evento, garantindo uma
            experiência auditiva excepcional para todos os presentes.
          </p>
          <p>
            <strong>Iluminação e Palco:</strong> Criamos ambientes
            impressionantes com iluminação profissional e palcos bem projetados
            que realçam a experiência do evento.
          </p>
          <p>
            <strong>Controle:</strong> Mantemos o controle total durante todo o
            evento para garantir que tudo funcione conforme o planejado.
          </p>
          <h2>Nossa Experiência</h2>
          <p>
            Com mais de 30 anos de experiência na indústria de eventos, temos o
            privilégio de ser uma referência confiável no mercado. Durante essas
            décadas, atendemos uma ampla variedade de eventos, desde pequenas
            reuniões e convenções até grandes eventos em grandes pavilhões, como
            por exemplo os pavilhões do Expo Center Norte.
          </p>
          <p>
            Nossa equipe altamente treinada e dedicada está familiarizada com os
            desafios únicos de cada tipo de evento e é especializada em superar
            expectativas. Trabalhamos incansavelmente para garantir que cada
            detalhe seja cuidadosamente planejado e executado, resultando em
            eventos memoráveis e de sucesso para nossos clientes.
          </p>
          <p>
            Nosso histórico comprovado e nossa vasta experiência nos permitem
            enfrentar qualquer desafio com confiança e oferecer soluções
            criativas e eficazes para garantir o sucesso de cada evento que
            planejamos e coordenamos.
          </p>
        </article>
        <article aria-label="Related Image">
          <Image
            src="/lu/lu-standing.jpg"
            alt="Owner standing with hands in the pocket and a friendly smile and an open space of and event in the background"
            width={500}
            height={300}
          />
        </article>
      </section>
    </section>
  );
};

export default About;
