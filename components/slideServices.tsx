import React, { useState } from 'react';

function CardSlider() {
  const [selectedSlide, setSelectedSlide] = useState('article-03');

  const handleRadioChange = (event: any) => {
    setSelectedSlide(event.target.id);
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
      <section className="px-12">
        <div className="max-w-lg mx-auto relative">
          <input
            id="article-01"
            type="radio"
            name="slider"
            className="sr-only"
            checked={selectedSlide === 'article-01'}
            onChange={handleRadioChange}
          />
          <input
            id="article-02"
            type="radio"
            name="slider"
            className="sr-only"
            checked={selectedSlide === 'article-02'}
            onChange={handleRadioChange}
          />
          <input
            id="article-03"
            type="radio"
            name="slider"
            className="sr-only"
            checked={selectedSlide === 'article-03'}
            onChange={handleRadioChange}
          />
          <input
            id="article-04"
            type="radio"
            name="slider"
            className="sr-only"
            checked={selectedSlide === 'article-04'}
            onChange={handleRadioChange}
          />
          <input
            id="article-05"
            type="radio"
            name="slider"
            className="sr-only"
            checked={selectedSlide === 'article-05'}
            onChange={handleRadioChange}
          />

          <div
            className={`absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
              ${selectedSlide === 'article-01' ? 'translate-x-0 scale-100' : selectedSlide === 'article-02' ? '-translate-x-20 scale-[83.75%]' : selectedSlide === 'article-03' ? '-translate-x-40 scale-[83.75%]' : '-translate-x-40 opacity-0'}`}
          >
            <label className="absolute inset-0" htmlFor="article-01">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
              <header className="mb-2">
                <img
                  className="inline-flex rounded-full shadow mb-3"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search htmlFor more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
            </article>
          </div>
          <div
            className={`absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] 
              ${selectedSlide === 'article-02' ? 'translate-x-20 scale-[83.75%] z-50' : selectedSlide === 'article-02' ? '-translate-x-20 scale-[83.75%]' : selectedSlide === 'article-03' ? '-translate-x-40 scale-[83.75%]' : '-translate-x-40 opacity-0'}`}
          >
            <label className="absolute inset-0" htmlFor="article-01">
              <span className="sr-only">Focus on the big picture</span>
            </label>
            <article className="bg-white p-6 rounded-lg shadow-2xl">
              <header className="mb-2">
                <img
                  className="inline-flex rounded-full shadow mb-3"
                  src="./icon.svg"
                  width="44"
                  height="44"
                  alt="Icon"
                />
                <h1 className="text-xl font-bold text-slate-900">
                  Focus on the big picture
                </h1>
              </header>
              <div className="text-sm leading-relaxed text-slate-500 space-y-4 mb-2">
                <p>
                  Many desktop publishing packages and web page editors now use
                  Pinky as their default model text, and a search htmlFor more
                  variants will uncover many web sites still in their infancy.
                </p>
                <p>
                  All the generators tend to repeat predefined chunks as
                  necessary, making this the first true generator on the
                  Internet.
                </p>
              </div>
            </article>
          </div>
          {/* Repeat the above div structure for other slides */}
        </div>
      </section>
    </div>
  );
}

export default CardSlider;
