"use client"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router" // Changed from next/navigation

// Define a type for our portfolio data
export type Portfolio = {
  id: number
  images: string[]
  src: string
  alt: string
  title: string
  description: string
  fullDescription?: string
}

// Move the portfolio data to a separate file so it can be imported by both components
export const PORTFOLIOS: Portfolio[] = [
  { 
    id: 1,
        images: [
      "/images/beteseb.jpg",
      "/images/beteseb.jpg",
      "/images/beteseb.jpg"
    ], 
    src: "/images/beyond.jpg", 
    alt: "CJS", 
    title: "Community Partner",
    description: "Partnering with CJS to redefine the boundaries of sports marketing and create exceptional brand experiences.",
    fullDescription: "CJS has been our community partner since 2018. Together, we've launched multiple community initiatives including youth sports programs and local business support networks. Their commitment to community development aligns perfectly with our mission to create meaningful connections through sports marketing."
  },
  { 
    id: 2,
    images: [],
    src: "/images/cjs.jpg", 
    alt: "Premium", 
    title: "Premium Partner",
    description: "Partnering with Premium to redefine the boundaries of sports marketing and create exceptional brand experiences.",
    fullDescription: "As our Premium Partner, this organization has helped us elevate our brand presence across multiple channels. Their strategic insights and global reach have been instrumental in our international expansion efforts. This partnership represents our commitment to excellence and innovation in the sports marketing industry."
  },
  { 
    id: 3,
    images: [],
    src: "/images/beteseb.jpg", 
    alt: "Official", 
    title: "Official Partner",
    description: "Partnering with Official to redefine the boundaries of sports marketing and create exceptional brand experiences.",
    fullDescription: "Our Official Partner provides essential support for our core operations. This strategic alliance has enabled us to develop cutting-edge marketing solutions while maintaining the highest standards of quality. Their industry expertise has been invaluable in navigating complex market challenges."
  },
  { 
    id: 4,
    images: [],
    src: "/images/cjs.jpg", 
    alt: "Gold", 
    title: "Gold Partner",
    description: "Partnering with Gold to redefine the boundaries of sports marketing and create exceptional brand experiences.",
    fullDescription: "Our Gold Partner relationship represents the pinnacle of collaborative excellence. This partnership has resulted in award-winning campaigns and record-breaking engagement metrics. Their commitment to pushing boundaries aligns with our vision to revolutionize the sports marketing landscape."
  },
]

const PortfolioImage = () => {
  const router = useRouter()
  const scrollRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const onScroll = () => {
      if (!scrollRef.current || !galleryRef.current) return

      const containerTop = scrollRef.current.offsetTop
      const scrollPosition = window.scrollY - containerTop
      const maxScroll = window.innerHeight * (PORTFOLIOS.length - 1)
      const progress = Math.min(Math.max(scrollPosition / maxScroll, 0), 1)

      // Calculate which image is currently active
      const newActiveIndex = Math.min(Math.floor(progress * PORTFOLIOS.length), PORTFOLIOS.length - 1)
      setActiveIndex(newActiveIndex)

      const translateX = progress * (PORTFOLIOS.length - 1) * 100
      galleryRef.current.style.transform = `translateX(-${translateX}vw)`

      setScrollY(scrollPosition)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Function to handle clicking on a portfolio
  const handlePortfolioClick = (portfolioId: number) => {
    router.push(`/portfolio/${portfolioId}`)
  }

  return (
    <div ref={scrollRef} className="relative w-full" style={{ height: `${PORTFOLIOS.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Progress indicator */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-4">
          {PORTFOLIOS.map((_, index) => (
            <div
              key={index}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-white" : "bg-gray-700"
              }`}
            ></div>
          ))}
        </div>

        <div
          ref={galleryRef}
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ width: `${PORTFOLIOS.length * 100}vw` }}
        >
          {PORTFOLIOS.map((portfolio, index) => (
            <div key={index} className="w-screen h-full relative px-4">
              {/* Clickable container with cursor pointer */}
              <div 
                className="relative w-full h-full cursor-pointer"
                onClick={() => handlePortfolioClick(portfolio.id)}
              >
                {/* Full-sized image with original colors */}
                <img
                  src={portfolio.src || "/placeholder.svg"}
                  alt={portfolio.alt}
                  className="w-full h-full object-cover select-none rounded-lg"
                  draggable={false}
                />

                {/* Gradient Overlay - just at the bottom for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none rounded-lg"></div>

                {/* Text Section */}
                <div className="absolute bottom-0 left-0 w-full p-12 md:p-20">
                  <div className="max-w-4xl">
                    {/* Category label */}
                    <div
                      className="inline-block px-3 py-1 border border-white/20 rounded-full text-white text-sm mb-6 bg-black/30 backdrop-blur-sm"
                      style={{
                        opacity: index === activeIndex ? 1 : 0,
                        transform: `translateY(${index === activeIndex ? 0 : 20}px)`,
                        transition: "opacity 0.6s ease, transform 0.6s ease",
                      }}
                    >
                      Partnership
                    </div>

                    {/* Title */}
                    <h2
                      className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight"
                      style={{
                        opacity: index === activeIndex ? 1 : 0,
                        transform: `translateY(${index === activeIndex ? 0 : 40}px)`,
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                        transitionDelay: "0.1s",
                      }}
                    >
                      {portfolio.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="text-xl text-white/90 max-w-xl"
                      style={{
                        opacity: index === activeIndex ? 1 : 0,
                        transform: `translateY(${index === activeIndex ? 0 : 30}px)`,
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                        transitionDelay: "0.2s",
                      }}
                    >
                      {portfolio.description}
                    </p>

                    {/* View Details Button */}
                    <button
                      className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-300 flex items-center"
                      style={{
                        opacity: index === activeIndex ? 1 : 0,
                        transform: `translateY(${index === activeIndex ? 0 : 30}px)`,
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                        transitionDelay: "0.3s",
                      }}
                    >
                      View Details
                    </button>

                    {/* Underline Animation */}
                    <div
                      className="h-px bg-white mt-8 transition-all duration-1000 ease-in-out"
                      style={{
                        width: index === activeIndex ? "140px" : "0px",
                        opacity: index === activeIndex ? 1 : 0,
                        transitionDelay: "0.3s",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Page indicator - side */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4 z-20">
          {PORTFOLIOS.map((_, i) => (
            <div
              key={i}
              className={`w-1 h-8 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-white" : "bg-white/30"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioImage