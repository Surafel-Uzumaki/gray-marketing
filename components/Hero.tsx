import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
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

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-tight tracking-tight mb-6">
          Let's Shape The Next Era <br className="hidden sm:block" /> Of Sport
          Marketing
        </h1>

        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          Innovative solutions for brands looking to make waves in the sports
          industry
        </p>

        <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-full shadow-xl hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 mb-16">
          Explore Our Services
        </button>

        {/* Animated Scroll Indicator */}
        <div className="absolute bottom-8 animate-bounce">
          <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-white text-2xl">⌄</span>
          </div>
        </div>

        {/* Ship Image at Bottom Center */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 md:w-80">
          <img
            src="/images/ship.png"
            alt="Ship sailing on water"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
