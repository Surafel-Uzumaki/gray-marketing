"use client"

import { useState, useEffect } from "react"

const Texts = ({ id }: { id?: string }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)

    // Auto-cycle through text highlights
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4)
    }, 3000)

    return () => {
      window.removeEventListener("resize", checkMobile)
      clearInterval(interval)
    }
  }, [])

  return (
    <div id={id} className="text-component relative min-h-screen bg-black overflow-hidden">
      {/* Digital noise texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      </div>

      {/* Vertical line */}
      <div className="absolute left-0 md:left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

      <div className="relative z-10 container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-5xl mx-auto">
          {/* Header section */}
          <div className="mb-20 md:mb-32">
            <div className="inline-block px-3 py-1 border border-gray-800 rounded-full text-gray-400 text-sm mb-6 bg-gray-900/50 backdrop-blur-sm">
              <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
              Digital Marketing Evolution
            </div>

            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              <div className="overflow-hidden">
                <span className="block text-white transform transition-transform duration-500 translate-y-0">
                  Redefining
                </span>
              </div>
              <div className="overflow-hidden">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white transform transition-transform duration-500 translate-y-0">
                  Sports Marketing
                </span>
              </div>
            </h2>

            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
              We transform how brands connect with audiences in the digital age, creating experiences that resonate and
              convert.
            </p>
          </div>

          {/* Text sections with line numbers */}
          <div className="space-y-16 md:space-y-24 relative">
            {/* Text item 1 */}
            <div
              className={`group transition-all duration-500 ${activeIndex === 0 ? "opacity-100" : "opacity-60"}`}
              onMouseEnter={() => setActiveIndex(0)}
            >
              <div className="flex items-start gap-6 md:gap-12">
                <div className="flex-none">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-gray-500 font-mono text-sm">
                    01
                  </div>
                  <div className="h-full w-px bg-gradient-to-b from-white/10 to-transparent mx-auto mt-2"></div>
                </div>
                <div className="flex-1">
                  <p
                    className={`text-2xl md:text-3xl font-light transition-all duration-500 ${activeIndex === 0 ? "text-white" : "text-gray-400"}`}
                  >
                    We are here for those who believe that{" "}
                    <span className="font-medium">change is the only constant</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Text item 2 */}
            <div
              className={`group transition-all duration-500 ${activeIndex === 1 ? "opacity-100" : "opacity-60"}`}
              onMouseEnter={() => setActiveIndex(1)}
            >
              <div className="flex items-start gap-6 md:gap-12">
                <div className="flex-none">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-gray-500 font-mono text-sm">
                    02
                  </div>
                  <div className="h-full w-px bg-gradient-to-b from-white/10 to-transparent mx-auto mt-2"></div>
                </div>
                <div className="flex-1">
                  <p
                    className={`text-2xl md:text-3xl font-light transition-all duration-500 ${activeIndex === 1 ? "text-white" : "text-gray-400"}`}
                  >
                    Visionaries who look beyond the game as it is, to{" "}
                    <span className="font-medium">the game as it could be</span>.
                  </p>
                </div>
              </div>
            </div>

            {/* Text item 3 */}
            <div
              className={`group transition-all duration-500 ${activeIndex === 2 ? "opacity-100" : "opacity-60"}`}
              onMouseEnter={() => setActiveIndex(2)}
            >
              <div className="flex items-start gap-6 md:gap-12">
                <div className="flex-none">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-gray-500 font-mono text-sm">
                    03
                  </div>
                  <div className="h-full w-px bg-gradient-to-b from-white/10 to-transparent mx-auto mt-2"></div>
                </div>
                <div className="flex-1">
                  <p
                    className={`text-2xl md:text-3xl font-light transition-all duration-500 ${activeIndex === 2 ? "text-white" : "text-gray-400"}`}
                  >
                    <span className="font-medium">Challenging conventions</span> and redefining the rules. Those who
                    only think in opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* Text item 4 */}
            <div
              className={`group transition-all duration-500 ${activeIndex === 3 ? "opacity-100" : "opacity-60"}`}
              onMouseEnter={() => setActiveIndex(3)}
            >
              <div className="flex items-start gap-6 md:gap-12">
                <div className="flex-none">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-gray-500 font-mono text-sm">
                    04
                  </div>
                </div>
                <div className="flex-1">
                  <p
                    className={`text-2xl md:text-3xl font-light transition-all duration-500 ${activeIndex === 3 ? "text-white" : "text-gray-400"}`}
                  >
                    Embracing the belief that the future of sports marketing{" "}
                    <span className="font-medium">isn't set in stone</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>

       
        </div>
      </div>

      {/* Animated corner accent */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.15;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Texts

