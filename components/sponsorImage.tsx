"use client";
import { useEffect, useRef, useState } from "react";

const SponsorImage = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const SPONSOR_IMAGES = [
    { src: "./images/cjs.jpg", alt: "cjs", title: "Community Partner" },
    { src: "./images/cjs.jpg", alt: "Premium", title: "Premium Partner" },
    { src: "./images/cjs.jpg", alt: "Official", title: "Official Partner" },
    { src: "./images/cjs.jpg", alt: "Gold", title: "Gold Partner" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      if (!scrollRef.current || !galleryRef.current) return;

      const containerTop = scrollRef.current.offsetTop;
      const scrollPosition = window.scrollY - containerTop;
      const maxScroll = window.innerHeight * (SPONSOR_IMAGES.length - 1);
      const progress = Math.min(Math.max(scrollPosition / maxScroll, 0), 1);

      const translateX = progress * (SPONSOR_IMAGES.length - 1) * 100;
      galleryRef.current.style.transform = `translateX(-${translateX}vw)`;

      setScrollY(scrollPosition);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="relative w-full"
      style={{ height: `${SPONSOR_IMAGES.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-white">
        <div
          ref={galleryRef}
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ width: `${SPONSOR_IMAGES.length * 100}vw` }}
        >
          {SPONSOR_IMAGES.map((image, index) => (
            <div key={index} className="w-screen h-full relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover select-none pl-4"
                draggable={false}
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Text Section (Bottom Left) */}
              <div className="absolute bottom-16 left-10 text-left text-white p-6 ml-10">
                <h2
                  className="text-4xl md:text-6xl font-extrabold mb-2 opacity-0 translate-y-4 transition-all duration-700 ease-out"
                  style={{
                    opacity: scrollY / 50 + 0.2,
                    transform: `translateY(${Math.max(
                      2 - scrollY / 20,
                      0
                    )}rem)`,
                  }}
                >
                  {image.title}
                </h2>
                <p
                  className="text-lg md:text-2xl opacity-0 translate-y-2 transition-all duration-00 ease-out"
                  style={{
                    opacity: scrollY / 50 + 0.3,
                    transform: `translateY(${Math.max(
                      2 - scrollY / 20,
                      0
                    )}rem)`,
                  }}
                >
                  {image.alt}
                </p>
                {/* Underline Animation */}
                <div
                  className="w-16 h-1 bg-white mt-2 transition-all duration-700"
                  style={{
                    width: `${scrollY / 10 + 40}px`,
                    opacity: scrollY / 400 + 0.5,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorImage;
