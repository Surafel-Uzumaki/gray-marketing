import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Set active link based on current route
    setActiveLink(window.location.pathname);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-black/50 backdrop-blur-md py-2" : "bg-black/90 py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo with wave effect - matching Hero style */}
        <Link 
          href="/" 
          className="flex items-center group"
          onClick={() => setActiveLink("/")}
        >
          <div className="relative">
            <span className="text-white text-2xl font-bold mr-1 group-hover:text-blue-400 transition-colors">
              GRAY'S MARKETING
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>
          <div className="w-2 h-2 ml-1 rounded-full bg-white animate-pulse"></div>
        </Link>

        {/* Desktop Navigation - Matching Hero's interactive elements */}
        <div className="hidden md:flex space-x-8">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "About us", href: "/aboutus" },
            { name: "Contact us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-1 py-2 transition-all duration-300 ${
                activeLink === item.href || 
                (item.href === "/#services" && window.location.hash === "#services")
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
              onClick={() => setActiveLink(item.href)}
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ${
                  activeLink === item.href || 
                  (item.href === "/#services" && window.location.hash === "#services")
                    ? "scale-x-100"
                    : "scale-x-0 origin-left group-hover:scale-x-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-white/20 ${
                  activeLink === item.href || 
                  (item.href === "/#services" && window.location.hash === "#services")
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button - unchanged from your Hero */}
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

      {/* Mobile Menu - Styled to match Hero */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-lg overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          {[
            { name: "Home", href: "/" },
            { name: "Services", href: "/#services" },
            { name: "About us", href: "/aboutus" },
            { name: "Contact us", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative py-3 pl-4 transition-all duration-300 border-b border-white/10 ${
                activeLink === item.href || 
                (item.href === "/#services" && window.location.hash === "#services")
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
                  activeLink === item.href || 
                  (item.href === "/#services" && window.location.hash === "#services")
                    ? "opacity-100"
                    : "opacity-0"
                }`}
              ></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;