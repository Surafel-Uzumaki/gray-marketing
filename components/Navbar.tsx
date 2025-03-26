import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";

interface NavProps {
  index: boolean;
}

const Navbar: React.FC<NavProps> = ({ index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (pathname: string) => ({
    color: router.pathname === pathname ? "#DAA520" : "#353635",
  });

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-lg backdrop-blur-md py-2"
          : "bg-white/80 py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link href="/" passHref>
              <img
                src="/images/logo.png"
                className="h-16 md:h-20 transition-all duration-300"
                alt="Logo"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden lg:flex space-x-8"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <motion.div variants={itemVariants}>
              <Link href="/" passHref>
                <motion.a
                  style={linkStyle("/")}
                  className="relative text-xl font-semibold px-3 py-2 group transition-colors duration-300"
                  whileHover={{ color: "#DAA520" }}
                >
                  Home
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#DAA520]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: router.pathname === "/" ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href={index ? "#Works" : "/"} passHref>
                <motion.a
                  className="relative text-xl font-semibold px-3 py-2 text-[#353635] group transition-colors duration-300"
                  whileHover={{ color: "#DAA520" }}
                >
                  Works
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#DAA520]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href={index ? "#contact" : "/"} passHref>
                <motion.a
                  className="relative text-xl font-semibold px-3 py-2 text-[#353635] group transition-colors duration-300"
                  whileHover={{ color: "#DAA520" }}
                >
                  Contact
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#DAA520]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </Link>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Link href={index ? "#ab" : "/"} passHref>
                <motion.a
                  className="relative text-xl font-semibold px-3 py-2 text-[#353635] group transition-colors duration-300"
                  whileHover={{ color: "#DAA520" }}
                >
                  AB
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#DAA520]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </Link>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden focus:outline-none"
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-8 flex flex-col gap-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0 }}
                className="h-0.5 bg-[#353635] block"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="h-0.5 bg-[#353635] block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0 }}
                className="h-0.5 bg-[#353635] block"
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="px-4 pt-2 pb-4 space-y-2 bg-white/95 backdrop-blur-sm">
              <Link href="/" passHref>
                <motion.a
                  style={linkStyle("/")}
                  className="block px-3 py-3 text-xl font-semibold hover:text-[#DAA520] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </motion.a>
              </Link>
              <Link href={index ? "#Works" : "/"} passHref>
                <motion.a
                  className="block px-3 py-3 text-xl font-semibold text-[#353635] hover:text-[#DAA520] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Works
                </motion.a>
              </Link>
              <Link href={index ? "#contact" : "/"} passHref>
                <motion.a
                  className="block px-3 py-3 text-xl font-semibold text-[#353635] hover:text-[#DAA520] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </motion.a>
              </Link>
              <Link href={index ? "#ab" : "/"} passHref>
                <motion.a
                  className="block px-3 py-3 text-xl font-semibold text-[#353635] hover:text-[#DAA520] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  AB
                </motion.a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
