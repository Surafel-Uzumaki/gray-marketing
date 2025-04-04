import React, { useState, useEffect } from "react";
import Link from "next/link";

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false);
    setActiveLink(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden" id="home">
      {/* Unique Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-md py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo with wave effect */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center group"
          >
            <div className="relative">
              <span className="text-white text-2xl font-bold mr-1 group-hover:text-blue-400 transition-colors">
                GRAY'S MARKETING
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform"></span>
            </div>
            <div className="w-2 h-2 ml-1 rounded-full bg-white animate-pulse"></div>
          </button>

          {/* Desktop Navigation - Enhanced link styling */}
          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "Services", id: "services" },
              { name: "About Us", href: "/aboutus" },
              { name: "Contact", href: "/contact" },
            ].map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-1 py-2 transition-all duration-300 ${
                    activeLink === item.href
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveLink(item.href);
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ${
                      activeLink === item.href
                        ? "scale-x-100"
                        : "scale-x-0 origin-left group-hover:scale-x-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-white/20 ${
                      activeLink === item.href ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id!)}
                  className={`relative px-1 py-2 transition-all duration-300 ${
                    activeLink === item.id
                      ? "text-white font-semibold"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ${
                      activeLink === item.id
                        ? "scale-x-100"
                        : "scale-x-0 origin-left group-hover:scale-x-100"
                    }`}
                  ></span>
                  <span
                    className={`absolute left-0 bottom-0 w-full h-0.5 bg-white/20 ${
                      activeLink === item.id ? "opacity-0" : "opacity-100"
                    }`}
                  ></span>
                </button>
              )
            )}
          </div>

          {/* Mobile menu button (unchanged) */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div
              className={`w-6 flex flex-col items-end space-y-1.5 transition-all ${
                menuOpen ? "transform rotate-90" : ""
              }`}
            >
              <span 
                className={`block h-0.5 bg-white transition-all ${
                  menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all ${
                  menuOpen ? "opacity-0" : "w-5"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all ${
                  menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-4"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Enhanced link styling */}
        <div
          className={`md:hidden bg-black/95 backdrop-blur-lg overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            {[
              { name: "Home", id: "home" },
              { name: "Services", id: "services" },
              { name: "About us", href: "/aboutus" },
              { name: "Contact us", href: "/contact" },
            ].map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative py-3 pl-4 transition-all duration-300 border-b border-white/10 ${
                    activeLink === item.href
                      ? "text-white font-semibold bg-white/5 rounded-lg"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => {
                    setActiveLink(item.href);
                    setMenuOpen(false);
                  }}
                >
                  {item.name}
                  <span
                    className={`absolute left-4 bottom-3 w-1.5 h-1.5 bg-blue-500 rounded-full transition-all ${
                      activeLink === item.href ? "opacity-100" : "opacity-0"
                    }`}
                  ></span>
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id!);
                    setMenuOpen(false);
                  }}
                  className={`relative py-3 pl-4 transition-all duration-300 border-b border-white/10 text-left ${
                    activeLink === item.id
                      ? "text-white font-semibold bg-white/5 rounded-lg"
                      : "text-white/80 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-4 bottom-3 w-1.5 h-1.5 bg-blue-500 rounded-full transition-all ${
                      activeLink === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  ></span>
                </button>
              )
            )}
          </div>
        </div>
      </nav>

      {/* Rest of the Hero section remains unchanged */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/images/home-hero-ocean-3.c091f11f.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4 pt-20">
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-tight tracking-tight mb-6">
          Let's Shape The Next Era <br className="hidden sm:block" /> Of Sport
          Marketing
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Innovative solutions for brands looking to make waves in the sports
          industry
        </p>

        {/* <button
          onClick={() => scrollToSection("services")}
          className="absolute bottom-20 animate-bounce"
        >
          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-white text-2xl">⌄</span>
          </div>
        </button> */}

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
  <img
    src="/images/ship.png"
    alt="Ship sailing on water"
    className="w-[15%] min-w-[40px] mx-auto object-contain"
  />
</div>
      </div>
    </section>
  );
};

export default Hero;
