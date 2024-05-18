import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
  description: "Empresa de producao e coordenacao de eventos"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className={`bg-myellow $ text-mblack ${gfmon.className} `}>
        <section className="flex flex-col h-screen justify-between">
          <section>
            <Header />
          </section>
          <section className={` `}>
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
