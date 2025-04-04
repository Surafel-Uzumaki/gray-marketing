import { useState, useEffect } from "react";

const Texts = ({ id }: { id?: string }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div
      id={id}
      className="text-component relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl animate-float1"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-red-200 mix-blend-multiply filter blur-xl animate-float2"></div>
      </div>

      <div className="relative z-10 flex justify-center items-center min-h-screen p-8">
        <style jsx>{`
          @keyframes float1 {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(-20px) translateX(10px);
            }
          }
          @keyframes float2 {
            0%,
            100% {
              transform: translateY(0) translateX(0);
            }
            50% {
              transform: translateY(10px) translateX(-15px);
            }
          }
          .animate-float1 {
            animation: float1 8s ease-in-out infinite;
          }
          .animate-float2 {
            animation: float2 10s ease-in-out infinite;
          }
        `}</style>

        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-red-500">
              Redefining Sports Marketing
            </span>
          </h2>

          <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed">
            <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-blue-500 to-blue-300 before:rounded-full">
              <p className="pl-4">
                We are here for those who believe that change is the only
                constant.
              </p>
            </div>

            <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-red-500 to-red-300 before:rounded-full">
              <p className="pl-4">
                Visionaries who look beyond the game as it is, to the game as it
                could be.
              </p>
            </div>

            <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-blue-500 to-blue-300 before:rounded-full">
              <p className="pl-4">
                Challenging conventions and redefining the rules. Those who only
                think in opportunities.
              </p>
            </div>

            <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:bg-gradient-to-b from-red-500 to-red-300 before:rounded-full">
              <p className="pl-4">
                Embracing the belief that the future of sports marketing isn't
                set in stone.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-2xl font-medium text-gray-900 mb-4">
                Get set.
              </p>
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
  );
};

export default Texts;
