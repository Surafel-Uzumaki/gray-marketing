import React from 'react';

const Services = () => {
    return (
        <>
            <div id="services" className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-black">
                <div className="container xl:max-w-6xl mx-auto px-4">

                    <header className="text-center mx-auto mb-12 lg:px-20">
                        <h2 className="text-2xl leading-normal mb-2 font-bold text-white">What We Do</h2>
                        {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 60" className="mx-auto" style={{ margin: '0 auto', height: '35px' }} xmlSpace="preserve">
                            <circle cx="50.1" cy="30.4" r="5" className="stroke-primary" style={{ fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10 }}></circle>
                            <line x1="55.1" y1="30.4" x2="100" y2="30.4" className="stroke-primary" style={{ strokeWidth: 2, strokeMiterlimit: 10 }}></line>
                            <line x1="45.1" y1="30.4" x2="0" y2="30.4" className="stroke-primary" style={{ strokeWidth: 2, strokeMiterlimit: 10 }}></line>
                        </svg> */}
                        <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">Save time managing advertising &amp; Content for your business.</p>
                    </header>

                    <div className="flex flex-wrap flex-row -mx-4 text-center ">
                        <ServiceCard icon="search" title="SEO Services" description="This is a wider card with supporting text below as a natural content." />
                        <ServiceCard icon="chat-square-dots" title="Social Content" description="This is a wider card with supporting text below as a natural content." />
                        <ServiceCard icon="badge-ad" title="Creative ads" description="This is a wider card with supporting text below as a natural content." />
                        <ServiceCard icon="card-checklist" title="Brand Identity" description="This is a wider card with supporting text below as a natural content." />
                        <ServiceCard icon="wallet2" title="Budget &amp; Marketing" description="This is a wider card with supporting text below as a natural content." />
                        <ServiceCard icon="funnel" title="Optimize conversions" description="This is a wider card with supporting text below as a natural content." />
                    </div>
                </div>
            </div>
            {/* <div className="w-full max-w-5xl mx-auto px-4 md:px-6 py-24">
      <section className="px-12">
        <div className="max-w-lg mx-auto relative">
          <input
            id="article-01"
            type="radio"
            name="slider"
            className="sr-only peer/01"
          />
          <input
            id="article-02"
            type="radio"
            name="slider"
            className="sr-only peer/02"
          />
          <input
            id="article-03"
            type="radio"
            name="slider"
            className="sr-only peer/03"
            checked
          />
          <input
            id="article-04"
            type="radio"
            name="slider"
            className="sr-only peer/04"
          />
          <input
            id="article-05"
            type="radio"
            name="slider"
            className="sr-only peer/05"
          />

          <div
            className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/01:[&_article]:ring
                        peer-focus-visible/01:[&_article]:ring-indigo-300
                        peer-checked/01:relative
                        peer-checked/01:z-50
                        peer-checked/01:translate-x-0
                        peer-checked/01:scale-100
                        peer-checked/01:[&>label]:pointer-events-none
                        peer-checked/02:-translate-x-20
                        peer-checked/02:scale-[83.75%]
                        peer-checked/02:z-40
                        peer-checked/03:-translate-x-40
                        peer-checked/03:z-30
                        peer-checked/04:-translate-x-40                    
                        peer-checked/04:opacity-0
                        peer-checked/05:-translate-x-40
                    "
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
            className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/02:[&_article]:ring
                        peer-focus-visible/02:[&_article]:ring-indigo-300                        
                        peer-checked/01:translate-x-20
                        peer-checked/01:scale-[83.75%]
                        peer-checked/01:z-40
                        peer-checked/02:relative
                        peer-checked/02:z-50
                        peer-checked/02:translate-x-0
                        peer-checked/02:scale-100
                        peer-checked/02:[&>label]:pointer-events-none
                        peer-checked/03:-translate-x-20
                        peer-checked/03:scale-[83.75%]
                        peer-checked/03:z-40
                        peer-checked/04:-translate-x-40
                        peer-checked/04:z-30
                        peer-checked/05:-translate-x-40 
                        peer-checked/05:opacity-0
                    "
          >
            <label className="absolute inset-0" htmlFor="article-02">
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
            className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/03:[&_article]:ring
                        peer-focus-visible/03:[&_article]:ring-indigo-300                          
                        peer-checked/01:translate-x-40
                        peer-checked/01:z-30
                        peer-checked/02:translate-x-20
                        peer-checked/02:scale-[83.75%]
                        peer-checked/02:z-40
                        peer-checked/03:relative
                        peer-checked/03:z-50
                        peer-checked/03:translate-x-0
                        peer-checked/03:scale-100
                        peer-checked/03:[&>label]:pointer-events-none
                        peer-checked/04:-translate-x-20
                        peer-checked/04:scale-[83.75%]
                        peer-checked/04:z-40
                        peer-checked/05:-translate-x-40
                        peer-checked/05:z-30                  
                    "
          >
            <label className="absolute inset-0" htmlFor="article-03">
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
            className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/04:[&_article]:ring
                        peer-focus-visible/04:[&_article]:ring-indigo-300                          
    
                        peer-checked/01:translate-x-40 
                        peer-checked/01:opacity-0
                        
                        peer-checked/02:translate-x-40
                        peer-checked/02:z-30
                        
                        peer-checked/03:translate-x-20
                        peer-checked/03:scale-[83.75%]
                        peer-checked/03:z-40
    
                        peer-checked/04:relative
                        peer-checked/04:z-50
                        peer-checked/04:translate-x-0
                        peer-checked/04:scale-100
                        peer-checked/04:[&>label]:pointer-events-none
                        
                        peer-checked/05:-translate-x-20
                        peer-checked/05:scale-[83.75%]
                        peer-checked/05:z-40
                    "
          >
            <label className="absolute inset-0" htmlFor="article-04">
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
            className="
                        absolute inset-0 scale-[67.5%] z-20 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]
                        peer-focus-visible/05:[&_article]:ring
                        peer-focus-visible/05:[&_article]:ring-indigo-300                          
                        peer-checked/01:translate-x-40 
                        peer-checked/02:translate-x-40 
                        peer-checked/02:opacity-0
                        peer-checked/03:translate-x-40
                        peer-checked/03:z-30
                        peer-checked/04:translate-x-20
                        peer-checked/04:scale-[83.75%]
                        peer-checked/04:z-40
                        peer-checked/05:relative
                        peer-checked/05:z-50
                        peer-checked/05:translate-x-0
                        peer-checked/05:scale-100
                        peer-checked/05:[&>label]:pointer-events-none
                    "
          >
             <div className="text-center h-full" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
                <div className="inline-block text-gray-900 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className={`bi bi-wallet2`} viewBox="0 0 16 16">
                        {getIconPath("wallet2")}
                    </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">Budget</h3>
                <p className="text-gray-500">This is a wider card with supporting text below as a natural content.</p>
            </div>
        </div>     
            <label className="absolute inset-0" htmlFor="article-05">
              <span className="sr-only text-red">Focus on the big picture</span>
            </label>
            
          </div>
        </div>
      </section>
    </div> */}
        </>
    )
}

const ServiceCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => {
    return (
        <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp" data-wow-duration="1s" style={{ visibility: 'visible', animationDuration: '1s', animationName: 'fadeInUp' }}>
            <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 rounded-xl">
                <div className="inline-block text-gray-900 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="2rem" fill="currentColor" className={`bi bi-${icon}`} viewBox="0 0 16 16">
                        {getIconPath(icon)}
                    </svg>
                </div>
                <h3 className="text-lg leading-normal mb-2 font-semibold text-black">{title}</h3>
                <p className="text-gray-500">{description}</p>
            </div>
        </div>
    );
}

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

export default Services;