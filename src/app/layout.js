import "./globals.css";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import {
  // Balsamiq_Sans,
  Montserrat_Alternates
} from "next/font/google";

// const gfbal = Balsamiq_Sans({
//   subsets: ["latin"],
//   weight: ["400", "700"]
//   // variable: "--font-gfbal"
// });
const gfmon = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  // variable: "--font-gfmon"
});

export const metadata = {
  title: "1001 Eventos",
  description: "Empresa de producao e coordenacao de eventos no Brasil"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`bg-myellow $ text-mblack ${gfmon.className} `}>
        <section className="flex flex-col  h-screen justify-between w-full">
          <section className="bg-mblack flex w-full md:h-[120px] xl:h-[150px] fixed z-50 border-b-2 border-myellow">
            <Header />
          </section>
          <section className={``}>
            <section>{children}</section>
          </section>
          <section>
            <Footer />
          </section>
        </section>
      </body>
    </html>
  );
}
