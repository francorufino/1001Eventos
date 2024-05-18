import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Servicos from "./components/Servicos";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <section id="herosection">
        <HeroSection />
      </section>
      <section id="about" className="text-mwhite bg-mblack">
        <About />
      </section>
      <section>
        <Servicos />
      </section>
      <section className="text-mwhite bg-mblack">
        <Contact />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
    </main>
  );
}
