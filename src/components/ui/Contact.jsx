import * as React from "react";
// import Link from "next/link";
import Image from "next/image";
// import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  // CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Ribeye_Marrow } from "next/font/google";
// import { Textarea } from "@/components/ui/textarea";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});

export function Contact() {
  return (
    <>
      <section id="contact" className="container pt-[50px]">
        <p
          className={`text-3xl md:text-4xl  font-bold mb-12 xl:mb-20 ${gfrib.className} text-center`}
        >
          Entre em contato
        </p>

        <section className="flex flex-wrap justify-center ">
          <section>
            <section className="flex flex-col justify-center -mb-12 text-center cursor-pointer">
              <section>
                {" "}
                <p>Envie um Zap!</p>
                <p className="font-semibold text-xl">(12) 99244-7547</p>
              </section>
              <section className="flex justify-center ">
                <Image
                  src={"/icons/icons8-whatsapp-480.png"}
                  alt="whatsapp icon"
                  width={50}
                  height={50}
                />
              </section>{" "}
            </section>
            <Image
              src={"/contato/phone1.png"}
              alt="whatsapp icon"
              width={200}
              height={100}
              //foto 200 por enquanto, devera ser 300 - qdo tiver o form de email
            />
          </section>
          <section className="pb-8">
            <Card className="w-[350px]   ">
              {" "}
              <form id="contactForm">
                <CardHeader>
                  <CardTitle className="text-center">
                    Envie um e-mail pra gente!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <section className="grid w-full text-center font-semibold gap-4 text-lg">
                    <p>10001eventos@gmail.com</p>
                    {/* <section className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" placeholder="Digite seu nome" required />
                    </section>
                    <section className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        placeholder="Digite seu e-mail"
                        name="senderEmail"
                        type="email"
                        required
                      />
                    </section>
                    <section className="flex flex-col space-y-1.5">
                      <Label htmlFor="mensagem">Mensagem</Label>
                      <Textarea
                        id="mensagem"
                        placeholder="Digite sua mensagem"
                        name="message"
                        type="text"
                        required
                      />
                    </section> */}
                  </section>
                </CardContent>
                {/* <CardFooter className="flex justify-center">
                 */}
                {/* <Button onClick={handleSubmit}>Enviar</Button> */}
                {/* </CardFooter> */}
              </form>
            </Card>
            <Image
              src={"/contato/email.png"}
              alt="whatsapp icon"
              width={50}
              height={100}
              className="mt-6 mx-auto"
            />
          </section>
        </section>
      </section>
    </>
  );
}

export default Contact;
