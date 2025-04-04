import React, { useState, useEffect, useRef } from "react";

const PartnershipsSection = () => {
  const brands = [
    { name: "Adidas", logo: "https://cdn.tuk.dev/assets/adidas-dark.png" },
    { name: "Chanel", logo: "https://cdn.tuk.dev/assets/channel-dark.png" },
    { name: "Nike", logo: "https://cdn.tuk.dev/assets/nike-dark.png" },
    { name: "Toyota", logo: "https://cdn.tuk.dev/assets/toyota-dark.png" },
    { name: "GS1", logo: "https://cdn.tuk.dev/assets/gs1-dark.png" },
    { name: "BlackBerry", logo: "https://cdn.tuk.dev/assets/berry-dark.png" },
    { name: "Mini", logo: "https://cdn.tuk.dev/assets/min-dark.png" },
    { name: "Honda", logo: "https://cdn.tuk.dev/assets/honda-dark.png" },
  ];

  const stats = [
    { value: 50, suffix: "+", label: "Global Partners" },
    { value: 15, suffix: "", label: "Years Experience" },
    { value: 200, suffix: "M+", label: "Annual Reach" },
    { value: 100, suffix: "%", label: "Client Focus" },
  ];

  return (
    <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-100 filter blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-red-100 filter blur-xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
              Our Valued Clients
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Collaborating with industry leaders to push boundaries and deliver
            exceptional results.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-20">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-xl p-6 flex items-center justify-center 
              border border-gray-200 transition-all duration-300 hover:bg-white hover:shadow-md hover:-translate-y-1"
            >
              <div className="relative w-full h-16 flex items-center justify-center">
                <img
                  src={brand.logo} // Use light version if available
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <span className="absolute bottom-0 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-gray-500 font-medium">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats with counting animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200"
            >
              <CounterBox
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                darkMode={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
interface CounterBoxProps {
  target: number;
  suffix?: string;  // Optional prop
  label: string;
  darkMode?: boolean; // Optional prop with default
}
// Enhanced Counter Component
const CounterBox = ({ target, suffix, label, darkMode = false }:CounterBoxProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const duration = 1500;
  const easeOutQuad = (t:any) => t * (2 - t);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let startTimestamp: number | null = null;

          const animateCount = (timestamp:any) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const elapsed = startTimestamp !== null ? timestamp - startTimestamp : 0;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeOutQuad(progress);
            const currentCount = Math.floor(easedProgress * target);

            setCount(currentCount);

            if (progress < 1) {
              requestAnimationFrame(animateCount);
            }
          };

          requestAnimationFrame(animateCount);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <p
        className={`text-3xl md:text-4xl font-bold ${
          darkMode
            ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400"
            : "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-500"
        } mb-2`}
      >
        {count}
        {suffix}
      </p>
      <p
        className={`text-sm md:text-base uppercase tracking-wider ${
          darkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default PartnershipsSection;
