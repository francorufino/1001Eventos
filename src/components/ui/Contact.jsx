import * as React from "react";
import Link from "next/link";
import Image from "next/image"; // Correct import for Image
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Ribeye_Marrow } from "next/font/google";
import { Textarea } from "@/components/ui/textarea";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});

export function Contact() {
  return (
    <section className="container pt-[150px]">
      <p className={`text-3xl font-bold mb-8 ${gfrib.className}`}>
        Entre em contato
      </p>

      <section className="flex flex-wrap justify-center">
        <section className="flex flex-col justify-center text-center">
          <section>
            {" "}
            <p>Envie um "Zap"!</p>
          </section>
          <section className="flex justify-center ">
            <Link href="#herosection">
              <Image
                src={"/icons/icons8-whatsapp-480.png"}
                alt="whatsapp icon"
                width={50}
                height={50}
              />
            </Link>
          </section>
        </section>
        <section>
          <Image
            src={"/contato/phone1.png"}
            alt="whatsapp icon"
            width={300}
            height={100}
          />
        </section>
        <section>
          <Card className="w-[350px] -mt-8">
            <CardHeader>
              <CardTitle>Envie um e-mail pra gente!</CardTitle>
            </CardHeader>
            <CardContent>
              <section className="grid w-full  gap-4">
                <section className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Digite seu nome" />
                </section>
                <section className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" placeholder="Digite seu e-mail" />
                </section>
                <section className="flex flex-col space-y-1.5">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea id="mensagem" placeholder="Digite sua mensagem" />
                </section>
              </section>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button>Enviar</Button>
            </CardFooter>
          </Card>
        </section>
      </section>
    </section>
  );
}

export default Contact;
