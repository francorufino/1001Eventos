"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ribeye_Marrow } from "next/font/google";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const gfrib = Ribeye_Marrow({
  subsets: ["latin"],
  weight: "400"
});

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href").startsWith("#")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        const navbarHeight = 70; // Adjust this value to the height of your navbar
        const padding = 50; // Additional padding

        if (targetElement) {
          const elementPosition =
            targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight - padding;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    document.querySelectorAll("nav a").forEach((link) => {
      link.addEventListener("click", handleScroll);
    });

    return () => {
      document.querySelectorAll("nav a").forEach((link) => {
        link.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <header className={`w-full bg-mblack text-myellow ${gfrib.className}`}>
      <section className="container max-w-screen-xl mx-auto py-6 flex justify-between items-center">
        <Link href="#herosection">
          <Image
            src="/logo/logo.png"
            alt="logo"
            width={50}
            height={50}
            className="sm:w-[75px] sm:h-[75px] xl:w-[100px] xl:h-[100px]"
          />
        </Link>

        <section className="flex space-x-4 justify-center items-center">
          <nav className="hidden md:flex justify-between gap-4">
            <Link
              href="#about"
              className={`${
                pathname === "#about" ? "text-myellow" : ""
              } text-base font-semibold hover:text-mwhite`}
            >
              Sobre
            </Link>
            <Link
              href="#services"
              className={`${
                pathname === "#services" ? "text-myellow" : ""
              } text-base font-semibold hover:text-mwhite`}
            >
              Serviços
            </Link>
            <Link
              href="#gallery"
              className={`${
                pathname === "#gallery" ? "text-myellow" : ""
              } text-base font-semibold hover:text-mwhite`}
            >
              Galeria
            </Link>
            <Link
              href="#contact"
              className={`${
                pathname === "#contact" ? "text-myellow" : ""
              } text-base font-semibold hover:text-mwhite`}
            >
              Contato
            </Link>
            <Link
              href="#login"
              className={`${
                pathname === "#login" ? "text-myellow" : ""
              } text-base font-semibold hover:text-mwhite`}
            >
              Login
            </Link>
          </nav>

          <section className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-myellow">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </section>
        </section>
      </section>

      <section
        className={`md:hidden bg-mblack text-myellow transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 pb-4"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col text-center space-y-4">
          <Link
            href="#about"
            className={`${
              pathname === "#about" ? "text-mwhite" : ""
            } text-base font-semibold hover:text-mwhite`}
            onClick={toggleMenu} // Close menu on link click
          >
            Sobre
          </Link>
          <Link
            href="#services"
            className={`${
              pathname === "#services" ? "text-mwhite" : ""
            } text-base font-semibold hover:text-mwhite`}
            onClick={toggleMenu} // Close menu on link click
          >
            Serviços
          </Link>
          <Link
            href="#gallery"
            className={`${
              pathname === "#gallery" ? "text-mwhite" : ""
            } text-base font-semibold hover:text-mwhite`}
            onClick={toggleMenu} // Close menu on link click
          >
            Galeria
          </Link>
          <Link
            href="#contact"
            className={`${
              pathname === "#contact" ? "text-mwhite" : ""
            } text-base font-semibold hover:text-mwhite`}
            onClick={toggleMenu} // Close menu on link click
          >
            Contato
          </Link>
          <Link
            href="#login"
            className={`${
              pathname === "#login" ? "text-mwhite" : ""
            } text-base font-semibold hover:text-mwhite`}
            onClick={toggleMenu} // Close menu on link click
          >
            Login
          </Link>
        </nav>
      </section>
    </header>
  );
};

export default Header;
