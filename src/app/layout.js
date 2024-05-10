import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  Ribeye_Marrow,
  Balsamiq_Sans,
  Montserrat_Alternates
} from "next/font/google";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
  // variable: "--font-gfrib"
});
const gfbal = Balsamiq_Sans({
  subsets: ["latin"],
  weight: ["400", "700"]
  // variable: "--font-gfbal"
});
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
      <body
        className={`bg-myellow ${gfmon.className} ${gfbal.className} ${gfrib.className}`}
      >
        <div className="flex flex-col h-screen justify-between">
          <section className={`${gfrib.className}`}>
            <Header />
          </section>
          <section className={`${gfrib.className}`}>
            <div>{children}</div>
          </section>
          <section className={`${gfrib.className}`}>
            <Footer />
          </section>
        </div>
      </body>
    </html>
  );
}
