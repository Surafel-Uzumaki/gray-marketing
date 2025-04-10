import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (href: string) => {
    if (href === "/") return router.pathname === href;
    if (href === "/#services") return router.asPath.includes("#services");
    return router.pathname.startsWith(href);
  };

  return (
    <nav className=" w-full z-0  bg-black/90 py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="">
            <span className="text-white text-2xl font-bold mr-1 group-hover:text-blue-400 transition-colors">
              GRAY'S MARKETING
            </span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </div>
          <div className="w-2 h-2 ml-1 rounded-full bg-white animate-pulse"></div>
        </Link>

        {/* Desktop Navigation */}
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
                isActive(item.href)
                  ? "text-white font-semibold"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transition-all duration-300 ${
                  isActive(item.href)
                    ? "scale-x-100"
                    : "scale-x-0 origin-left group-hover:scale-x-100"
                }`}
              ></span>
              <span
                className={`absolute left-0 bottom-0 w-full h-0.5 bg-white/20 ${
                  isActive(item.href) ? "opacity-0" : "opacity-100"
                }`}
              ></span>
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
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

      {/* Mobile Menu */}
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
                isActive(item.href)
                  ? "text-white font-semibold bg-white/5 rounded-lg"
                  : "text-white/80 hover:text-white hover:bg-white/5"
              }`}
              onClick={() => {
                setMenuOpen(false);
              }}
            >
              {item.name}
              <span
                className={`absolute left-4 bottom-3 w-1.5 h-1.5 bg-blue-500 rounded-full transition-all ${
                  isActive(item.href) ? "opacity-100" : "opacity-0"
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
