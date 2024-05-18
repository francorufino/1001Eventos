import React from "react";
import { Ribeye_Marrow } from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section>
      <section
        className={`bg-mblack text-mwhite p-8 flex justify-center text-center mt-8 ${gfrib.className}`}
      >
        <p className="container">
          1001 EVENTOS - Todos os direitos reservados - {currentYear}
        </p>
      </section>
    </section>
  );
};

export default Footer;
