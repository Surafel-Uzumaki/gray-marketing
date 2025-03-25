import React from 'react'

import "keen-slider/keen-slider.min.css"; // Import KeenSlider CSS if needed
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import { LampContainer } from './ui/lamp';
import { Boxes } from './ui/background-boxes';
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/moving-border";

import { cn } from "@/utils/cn";

const NewServices = () => {
  // useEffect(() => {
  //   const keenSlider = new KeenSlider('#keen-slider', {
  //     loop: true,
  //     slides: {
  //       origin: 'center',
  //       perView: 1.25,
  //       spacing: 16,
  //     },
  //     breakpoints: {
  //       '(min-width: 1024px)': {
  //         slides: {
  //           origin: 'auto',
  //           perView: 1.5,
  //           spacing: 32,
  //         },
  //       },
  //     },
  //   });

  //   const keenSliderPrevious = document.getElementById('keen-slider-previous');
  //   const keenSliderNext = document.getElementById('keen-slider-next');
  //   const keenSliderPreviousDesktop = document.getElementById('keen-slider-previous-desktop');
  //   const keenSliderNextDesktop = document.getElementById('keen-slider-next-desktop');

  //   keenSliderPrevious.addEventListener('click', () => keenSlider.prev());
  //   keenSliderNext.addEventListener('click', () => keenSlider.next());
  //   keenSliderPreviousDesktop.addEventListener('click', () => keenSlider.prev());
  //   keenSliderNextDesktop.addEventListener('click', () => keenSlider.next());

  //   return () => {
  //     keenSlider.destroy(); // Cleanup when component unmounts
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  const [sliderRef, slider] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "center",
      perView: 1.25,
      spacing: 15,
    },
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': {
        loop: false,
        slides: {
          origin: 'auto',
          perView: 1.5,
          spacing: 32,
        },
      },
    },
  });

  const handlePrevClick = () => {
    if (slider.current) {
      slider.current?.prev();
    }
  };

  // Handle Next button click
  const handleNextClick = () => {
    if (slider.current) {
      slider.current?.next();
    }
  };

  return (
    <section className=" bg-[#F4F7F5] ">
      
      <div className="px-6 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8  xl:py-24">
     
 
      {/* <div className="flex items-center justify-center mx-auto  my-20">
      <p className="text-2xl py-2 md:text-3xl mb-24 text-gray-600 text-center leading-4 w-[80%]">
  <span className="block mb-6">We are here for those who believe that change is the only constant.</span>
  <span className="block mb-6"> Visionaries who look beyond the game as it is, to the game as it could be. </span>
  <span className="block mb-6">Challenging conventions and redefining the rules. Those who only think in opportunities. </span>
  <span className="block mb-6">Embracing the belief that the future of sports marketing isn't set in stone. <br /></span>
  <span className="block mb-6"> Get set. <br /> </span>
  <span className="underline text-red-500">On Your Marks</span> (formerly TDE).<br />
  Lets shape the next era of marketing.
</p>

</div> */}

        

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16 ">
          <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-[#353635] sm:text-4xl">
            What We Do...
            </h2>

            <p className="mt-4 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              veritatis illo placeat harum porro optio fugit a culpa sunt id!
            
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                onClick={handlePrevClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full cursor-pointer border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                onClick={handleNextClick}
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} id="keen-slider" className="keen-slider">
              <div className="keen-slider__slide rounded-xl">
                <blockquote className="flex h-full flex-col justify-between bg-[#222823] p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-rose-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        {getIconPath("search")}
                    </svg>
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-[#F4F7F5] sm:text-3xl">
                      SEO Services
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-400">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  {/* <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                    &mdash; Michael Scott
                  </footer> */}
                </blockquote>
              </div>

              <div className="keen-slider__slide rounded-xl">
                <blockquote className="flex h-full flex-col justify-between bg-[#222823] p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-rose-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-chat-square-dots" viewBox="0 0 16 16">
                        {getIconPath("chat-square-dots")}
                    </svg>
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-[#F4F7F5] sm:text-3xl">
                      Social Content
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-400">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  {/* <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                    &mdash; Michael Scott
                  </footer> */}
                </blockquote>
              </div>

              <div className="keen-slider__slide rounded-xl">
                <blockquote className="flex h-full flex-col justify-between bg-[#222823] p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-rose-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-badge-ad" viewBox="0 0 16 16">
                        {getIconPath("badge-ad")}
                    </svg>
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-[#F4F7F5] sm:text-3xl">
                      Creative ads
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-400">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  {/* <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                    &mdash; Michael Scott
                  </footer> */}
                </blockquote>
              </div>
              <div className="keen-slider__slide rounded-xl">
                <blockquote className="flex h-full flex-col justify-between bg-[#222823] p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-rose-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-card-checklist" viewBox="0 0 16 16">
                        {getIconPath("card-checklist")}
                    </svg>
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-[#F4F7F5] sm:text-3xl">
                      Brand Identity
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-400">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  {/* <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                    &mdash; Michael Scott
                  </footer> */}
                </blockquote>
              </div>
              <div className="keen-slider__slide rounded-xl">
                <blockquote className="flex h-full flex-col justify-between bg-[#222823] p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-rose-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                        {getIconPath("wallet2")}
                    </svg>
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-[#F4F7F5] sm:text-3xl">
                      Budget &amp; Marketing
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-400">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  {/* <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                    &mdash; Michael Scott
                  </footer> */}
                </blockquote>
              </div>
              <div className="keen-slider__slide rounded-xl">
                <blockquote className="flex h-full flex-col justify-between bg-[#222823] p-6 shadow-sm sm:p-8 lg:p-12">
                  <div>
                    <div className="flex gap-0.5 text-rose-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                        {getIconPath("funnel")}
                    </svg>
                    </div>

                    <div className="mt-4">
                      <p className="text-2xl font-bold text-[#F4F7F5] sm:text-3xl">
                      Optimize conversions
                      </p>

                      <p className="mt-4 leading-relaxed text-gray-400">
                        No, Rose, they are not breathing. And they have no arms
                        or legs … Where are they? You know what? If we come
                        across somebody with no arms or legs, do we bother
                        resuscitating them? I mean, what quality of life do we
                        have there?
                      </p>
                    </div>
                  </div>

                  {/* <footer className="mt-4 text-sm font-medium text-gray-400 sm:mt-6">
                    &mdash; Michael Scott
                  </footer> */}
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            id="keen-slider-previous"
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            onClick={handlePrevClick}
          >
            <svg
              className="size-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            id="keen-slider-next"
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            onClick={handleNextClick}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
const getIconPath = (icon: string) => {
  switch (icon) {
      case "search":
          return <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />;
      case "chat-square-dots":
          return <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />;
      case "badge-ad":
          return <path d="M3.7 11l.47-1.542h2.004L6.644 11h1.261L5.901 5.001H4.513L2.5 11h1.2zm1.503-4.852l.734 2.426H4.416l.734-2.426h.053zm4.759.128c-1.059 0-1.753.765-1.753 2.043v.695c0 1.279.685 2.043 1.74 2.043.677 0 1.222-.33 1.367-.804h.057V11h1.138V4.685h-1.138v2.36h-.053c-.18-.475-.68-.77-1.336-.77zm.387.923c.58 0 1.002.44 1.002 1.138v.602c0 .76-.396 1.2-.984 1.2-.598 0-.972-.449-.972-1.248v-.453c0-.795.37-1.24.954-1.24z" />;
      case "card-checklist":
          return <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />;
      case "wallet2":
          return <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />;
      case "funnel":
          return <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />;
      default:
          return null;
  }
}
export default NewServices;
