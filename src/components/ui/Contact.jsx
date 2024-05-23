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
      <section className="flex">
        <section className="flex-1 justify-center flex ">
          <Image
            src={"/contato/phone1.png"}
            alt="whatsapp icon"
            width={300}
            height={100}
          />
        </section>
        <section className="flex-1 flex mb-12">
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Envie um e-mail pra gente!</CardTitle>
            </CardHeader>
            <CardContent>
              <section className="grid w-full  gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nome</Label>
                  <Input id="name" placeholder="Digite seu nome" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">E-mail</Label>
                  <Input id="email" placeholder="Digite seu e-mail" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea id="mensagem" placeholder="Digite sua mensagem" />
                </div>
              </section>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button>Enviar</Button>
            </CardFooter>
          </Card>
          <section className="flex-1 flex flex-col p-10">
            <div className="font-extrabold text-xl text-center">
              <p>Prefere enviar um "Zap"?</p> {/* Correct nesting */}
            </div>
            <div className="flex justify-center mt-8">
              <Link href="#herosection">
                <Image
                  src={"/icons/icons8-whatsapp-480.png"}
                  alt="whatsapp icon"
                  width={50}
                  height={50}
                />
              </Link>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Contact;
