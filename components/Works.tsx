import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Works = ({ id }: { id?: string }) => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = 5; // Updated to match your project count

  const nextSlide = () => sliderRef.current?.slickNext();
  const prevSlide = () => sliderRef.current?.slickPrev();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  const progressPercentage = ((currentSlide + 1) / slideCount) * 100;

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "AI-powered shopping experience with personalized recommendations",
      tags: ["React", "Node.js", "MongoDB"],
      image: "./images/beteseb.jpg",
    },
    {
      title: "Health Tracker",
      description: "Comprehensive fitness and nutrition monitoring",
      tags: ["React Native", "Firebase"],
      image: "./images/beteseb.jpg",
    },
    {
      title: "Finance Dashboard",
      description: "Real-time personal finance analytics",
      tags: ["TypeScript", "D3.js"],
      image: "./images/beteseb.jpg",
    },
    {
      title: "Learning Portal",
      description: "Interactive courses with video lessons",
      tags: ["Next.js", "GraphQL"],
      image: "./images/beteseb.jpg",
    },
    {
      title: "Social Network",
      description: "Community platform with real-time chat",
      tags: ["React", "Socket.io"],
      image: "./images/beteseb.jpg",
    },
  ];

  return (
    <div
      id={id}
      className="bg-gradient-to-b from-dark-blue to-black py-16 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-500 to-blue-600 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-400 to-indigo-600 blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-indigo-600 rounded-full mb-6 animate-bounce-slow">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Featured projects that showcase our expertise
          </p>
        </div>

        <div className="relative">
          <Slider ref={sliderRef} {...settings} className="pb-16">
            {projects.map((project, index) => (
              <div key={index} className="px-2 outline-none">
                <div className="project-card rounded-xl overflow-hidden cursor-pointer">
                  <div className="project-image absolute inset-0 w-full h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="project-content absolute bottom-0 left-0 p-6 w-full transition-all duration-500">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-3">
                        {project.description}
                      </p>
                      <div className="project-tags flex flex-wrap gap-2">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-900/50 rounded-full text-sm text-white transition-all"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          <div className="flex flex-col items-center mt-8">
            <div className="w-full max-w-md h-1.5 bg-gray-800 rounded-full mb-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            <div className="text-gray-400 text-sm mb-6">
              <span className="text-white font-medium">{currentSlide + 1}</span>{" "}
              / {slideCount}
            </div>

            <div className="flex gap-4">
              <button
                onClick={prevSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-indigo-600 rounded-full transition-all duration-300 group shadow-lg hover:shadow-indigo-500/50"
                aria-label="Previous"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-transform group-hover:-translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 flex items-center justify-center bg-gray-800 hover:bg-indigo-600 rounded-full transition-all duration-300 group shadow-lg hover:shadow-indigo-500/50"
                aria-label="Next"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slick-slide {
          padding: 40px 20px;
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .slick-prev:before,
        .slick-next:before {
          font-family: "slick";
          opacity: 0.75;
          color: white;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .slick-center .project-card {
          transform: scale(1.1);
          z-index: 10;
          box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.3);
        }
        .slick-slide:not(.slick-center) .project-card {
          transform: scale(0.9);
          opacity: 0.8;
        }
        .project-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
          height: 450px;
          position: relative;
        }
        .project-card:hover {
          transform: scale(1.15) !important;
          z-index: 20 !important;
          box-shadow: 0 25px 50px -12px rgba(99, 102, 241, 0.5);
        }
        .project-image::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 60%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.9) 0%,
            transparent 100%
          );
          transition: all 0.5s ease;
        }
        .project-card:hover .project-image::before {
          height: 100%;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.95) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }
        .project-content {
          transform: translateY(20px);
          opacity: 0.9;
        }
        .project-card:hover .project-content {
          transform: translateY(0);
          opacity: 1;
        }
        .project-tags span {
          transition: all 0.3s ease;
          transform: translateY(10px);
          opacity: 0;
        }
        .project-card:hover .project-tags span {
          transform: translateY(0);
          opacity: 1;
          background: rgba(99, 102, 241, 0.3);
          backdrop-filter: blur(8px);
        }
        .project-tags span:nth-child(1) {
          transition-delay: 0.1s;
        }
        .project-tags span:nth-child(2) {
          transition-delay: 0.2s;
        }
        .project-tags span:nth-child(3) {
          transition-delay: 0.3s;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Works;
