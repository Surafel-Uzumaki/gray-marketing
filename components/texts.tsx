import { useRef, useState, useEffect } from "react";

const Texts = () => {
  const galleryRef = useRef<HTMLDivElement>(null); 
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const images = [
    "/images/beteseb.jpg",
    "/images/beteseb.jpg",
    "/images/beteseb.jpg",
    "/images/beteseb.jpg",
  ];

  const handleWheel = (e:any) => {
    if (isHovering && galleryRef.current) {
      e.preventDefault();
      if (isMobile) {
        galleryRef.current.scrollLeft += e.deltaY;
      } else {
        galleryRef.current.scrollTop += e.deltaY;
      }
    }
  };

  return (
    <div className="text-component relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl animate-float1"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-red-200 mix-blend-multiply filter blur-xl animate-float2"></div>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row min-h-screen">
        {/* Image Gallery */}
        <div
          ref={galleryRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onWheel={handleWheel}
          className={`
            w-full md:w-1/2 
            ${isMobile ? 
              'h-[60vh] overflow-x-auto overflow-y-hidden snap-x snap-mandatory' : 
              'h-screen sticky top-0 overflow-y-auto overflow-x-hidden'
            }
          `}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <style jsx>{`
            .text-component div::-webkit-scrollbar {
              display: none;
            }
            @keyframes float1 {
              0%, 100% { transform: translateY(0) translateX(0); }
              50% { transform: translateY(-20px) translateX(10px); }
            }
            @keyframes float2 {
              0%, 100% { transform: translateY(0) translateX(0); }
              50% { transform: translateY(10px) translateX(-15px); }
            }
            .animate-float1 { animation: float1 8s ease-in-out infinite; }
            .animate-float2 { animation: float2 10s ease-in-out infinite; }
            
            /* Unique image styling */
            .polaroid-frame {
              background: white;
              padding: 1rem 1rem 3rem;
              box-shadow: 0 4px 15px rgba(0,0,0,0.1);
              transform: rotate(var(--rotate));
              transition: all 0.3s ease;
            }
            .polaroid-frame:hover {
              transform: rotate(0) scale(1.05);
              z-index: 10;
            }
          `}</style>

          <div className={`
            ${isMobile ? 
              'flex flex-row h-full items-center' : 
              'flex flex-col items-center space-y-12 p-8'
            }
          `}>
            {images.map((img, index) => {
              // Generate random slight rotation for each image
              const rotation = isMobile ? 0 : (index % 2 === 0 ? -2 : 2);
              return (
                <div
                  key={index}
                  className={`
                    ${isMobile ? 
                      'flex-shrink-0 w-[85vw] h-[50vh] mx-4 snap-center' : 
                      'w-[80%]'
                    }
                    relative group
                  `}
                  style={{
                    ...({ '--rotate': `${rotation}deg` } as React.CSSProperties)
                  }}
                >
                  <div className={`
                    ${isMobile ? '' : 'polaroid-frame'}
                    w-full h-full overflow-hidden
                    ${isMobile ? 'rounded-xl' : 'rounded-sm'}
                    transition-all duration-700
                  `}>
                    <div className="relative w-full h-full">
                      <img
                        src={img}
                        alt={`Visual ${index + 1}`}
                        className={`
                          w-full h-full object-cover 
                          ${isMobile ? '' : 'border-4 border-white'}
                          transition-transform duration-700 group-hover:scale-105
                        `}
                      />
                      {!isMobile && (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="inline-block px-3 py-1 bg-white/90 text-gray-800 text-sm font-medium rounded-full shadow-sm">
                              Case Study {index + 1}
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Text Content */}
        <div className={`
          w-full md:w-1/2 p-8 md:p-12 flex items-center justify-center
          ${isMobile ? 'order-first' : ''}
        `}>
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
                Redefining Sports Marketing
              </span>
            </h2>
            
            <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
              <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-blue-500 to-blue-300 before:rounded-full">
                <p className="pl-4">
                  We are here for those who believe that change is the only constant.
                </p>
              </div>
              
              <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-red-500 to-red-300 before:rounded-full">
                <p className="pl-4">
                  Visionaries who look beyond the game as it is, to the game as it could be.
                </p>
              </div>
              
              <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-blue-500 to-blue-300 before:rounded-full">
                <p className="pl-4">
                  Challenging conventions and redefining the rules. Those who only think in opportunities.
                </p>
              </div>
              
              <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-red-500 to-red-300 before:rounded-full">
                <p className="pl-4">
                  Embracing the belief that the future of sports marketing isn't set in stone.
                </p>
              </div>
              
              <div className="pt-8">
                <p className="text-2xl font-medium text-gray-900 mb-4">Get set.</p>
                <p className="text-3xl font-bold">
                  <span className="underline decoration-red-500 underline-offset-8 text-gray-900">
                    On Your Marks
                  </span>{" "}
                  <span className="text-gray-600">(formerly TDE)</span>
                </p>
                <p className="text-xl mt-4 text-gray-600">
                  Let's shape the next era of marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Texts;