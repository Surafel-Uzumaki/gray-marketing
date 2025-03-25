import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

// Custom SVG Icons
const ChevronLeftIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M15 18l-6-6 6-6"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 18l6-6-6-6"/>
  </svg>
);

const services = [
  {
    title: "Algorithmic SEO",
    description: "Machine-learning optimized strategies that outpace competitors",
    icon: "search",
    color: "from-cyan-500 to-blue-600",
  },
  {
    title: "Social Dominance",
    description: "Content engineered to hijack attention and convert audiences",
    icon: "chat-square-dots",
    color: "from-purple-500 to-pink-600",
  },
  {
    title: "Conversion Alchemy",
    description: "Turn visitors into buyers with psychological triggers",
    icon: "badge-ad",
    color: "from-amber-500 to-red-600",
  },
  {
    title: "Brand Hacking",
    description: "Shortcut to market leadership through strategic positioning",
    icon: "card-checklist",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Data Warfare",
    description: "Leverage analytics to dominate your market space",
    icon: "bar-chart",
    color: "from-violet-500 to-indigo-600",
  },
  {
    title: "AI Automation",
    description: "Implement intelligent systems that work while you sleep",
    icon: "robot",
    color: "from-orange-500 to-amber-600",
  },
];

const Services = () => {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      origin: "center",
      perView: 1.2,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 640px)": { 
        slides: { 
          perView: 2.2,
          spacing: 24
        } 
      },
      "(min-width: 768px)": { 
        slides: { 
          perView: 2.8,
          spacing: 32 
        } 
      },
      "(min-width: 1024px)": { 
        slides: { 
          perView: 3.5,
          spacing: 40 
        } 
      },
      "(min-width: 1280px)": { 
        slides: { 
          perView: 4,
          spacing: 48 
        } 
      }
    },
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section
      ref={containerRef}
      className="relative bg-gradient-to-b from-gray-950 to-gray-900 py-32 overflow-hidden"
    >
      {/* Animated wave background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 overflow-hidden opacity-20"
      >
        <WaveBackground />
      </motion.div>

      {/* Floating grid */}
      <div className="absolute inset-0 opacity-10 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]">
        <div className="absolute inset-0 bg-[url('/grid-dark.svg')] bg-[length:120px_120px]"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-100 mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-100">
              Gray
            </span>
            <span className="text-gray-400">Matrix</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Next-generation digital solutions that blend technology and psychology
          </p>
        </motion.div>

        <div className="relative">
          <div ref={sliderRef} className="keen-slider pb-2">
            {services.map((service, i) => (
              <div key={i} className="keen-slider__slide">
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            onClick={() => slider.current?.prev()} 
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800/80 text-gray-400 hover:bg-gray-700/90 hover:text-white transition backdrop-blur-sm"
          >
            <ChevronLeftIcon />
          </button>
          <button 
            onClick={() => slider.current?.next()} 
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-800/80 text-gray-400 hover:bg-gray-700/90 hover:text-white transition backdrop-blur-sm"
          >
            <ChevronRightIcon />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-12 gap-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider.current?.moveToIdx(idx)}
              className="w-2 h-2 rounded-full bg-gray-700 hover:bg-gray-500 transition"
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ y: -10 }}
      className="relative h-full group cursor-pointer mx-1"
    >
      {/* Liquid gradient background */}
      <div
        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
      />

      {/* Glass card */}
      <div className="relative h-full bg-gray-900/30 border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm overflow-hidden">
        {/* Floating bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 40 + 10,
                height: Math.random() * 40 + 10,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: [0, 0.3, 0],
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon with liquid effect */}
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 mb-8 rounded-xl bg-gray-800/50 border border-gray-700/50 flex items-center justify-center self-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="white"
              className={`text-transparent bg-clip-text bg-gradient-to-br ${service.color}`}
              viewBox="0 0 16 16"
            >
              {getIconPath(service.icon)}
            </svg>
          </motion.div>

          <h3 className="text-2xl font-bold text-gray-100 mb-4">
            {service.title}
          </h3>
          <p className="text-gray-300">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const WaveBackground = () => {
  return (
    <svg
      viewBox="0 0 1440 800"
      className="w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="rgba(100, 200, 255, 0.1)" />
          <stop offset="100%" stopColor="rgba(200, 100, 255, 0.1)" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0,400 C150,500 350,300 500,400 C650,500 850,700 1000,700 C1150,700 1300,500 1440,400 L1440,800 L0,800 Z"
        fill="url(#gradient)"
        animate={{
          d: [
            "M0,400 C150,500 350,300 500,400 C650,500 850,700 1000,700 C1150,700 1300,500 1440,400 L1440,800 L0,800 Z",
            "M0,400 C150,300 350,500 500,400 C650,300 850,100 1000,200 C1150,300 1300,500 1440,400 L1440,800 L0,800 Z",
            "M0,400 C150,500 350,700 500,600 C650,500 850,300 1000,400 C1150,500 1300,700 1440,600 L1440,800 L0,800 Z",
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};

const getIconPath = (icon: string) => {
  switch (icon) {
    case "search":
      return (
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
      );
    case "chat-square-dots":
      return (
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      );
    case "badge-ad":
      return (
        <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.138v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />
      );
    case "card-checklist":
      return (
        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
      );
    case "bar-chart":
      return (
        <path d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-6 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm-5 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3z" />
      );
    case "robot":
      return (
        <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z" />
      );
    default:
      return null;
  }
};

export default Services;