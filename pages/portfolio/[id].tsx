import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { PORTFOLIOS, Portfolio } from "../../components/sponsorImage"
import Link from "next/link"
import Head from "next/head"
import { ArrowLeft } from 'lucide-react'
import path from "path"

export default function PortfolioDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const [portforlio, setPortfolio] = useState<Portfolio | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      const portforlioId = parseInt(id as string)
      const foundPortfolio = PORTFOLIOS.find(s => s.id === portforlioId)
      
      if (foundPortfolio) {
        setPortfolio(foundPortfolio)
      }
      setLoading(false)
    }
  }, [id])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!portforlio) {
    return <PortfolioNotFound router={router} />
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>{portforlio.title} | Partnership Details</title>
      </Head>
      
      <HeroSection portforlio={portforlio} router={router} />
      
      <div className="max-w-4xl mx-auto p-8 md:p-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <ContentSection portforlio={portforlio} />
          </div>
          <div className="md:col-span-1">
            {/* Sidebar content if needed */}
          </div>
        </div>
      </div>

      <FullScreenGallery portforlio={portforlio} />
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
    </div>
  )
}

function PortfolioNotFound({ router }: { router: any }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <Head>
        <title>Portfolio Not Found</title>
      </Head>
      <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
      <p className="mb-8">The portforlio you're looking for doesn't exist.</p>
      <button 
        onClick={() => router.back()} 
        className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 flex items-center"
      >
        <ArrowLeft className="mr-2 h-5 w-5" />
        Go Back
      </button>
    </div>
  )
}

function HeroSection({ portforlio, router }: { portforlio: Portfolio, router: any }) {
  return (
    <div className="relative h-[60vh] w-full">
      <img 
        src={portforlio.src || "/placeholder.svg"} 
        alt={portforlio.alt} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
        <button 
          onClick={() => router.back()} 
          className="mb-8 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 flex items-center"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </button>
        
        <h1 className="text-4xl md:text-6xl font-light mb-4">{portforlio.title}</h1>
        <div className="h-1 w-24 bg-white mb-6"></div>
        <p className="text-xl md:text-2xl text-white/80 max-w-2xl">{portforlio.description}</p>
      </div>
    </div>
  )
}

function ContentSection({ portforlio }: { portforlio: Portfolio }) {
  return (
    <>
      <h2 className="text-3xl font-light mb-6">Partnership Details</h2>
      <p className="text-lg text-white/80 mb-6">
        {portforlio.fullDescription || "Detailed information about this partnership will be available soon."}
      </p>
      
      <h3 className="text-2xl font-light mb-4 mt-12">Key Achievements</h3>
      <ul className="space-y-4">
        <li className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-white mt-2 mr-3"></div>
          <p className="text-white/80">Successful collaboration on multiple award-winning campaigns</p>
        </li>
        <li className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-white mt-2 mr-3"></div>
          <p className="text-white/80">Increased brand visibility by 45% across target demographics</p>
        </li>
        <li className="flex items-start">
          <div className="h-2 w-2 rounded-full bg-white mt-2 mr-3"></div>
          <p className="text-white/80">Developed innovative marketing strategies that set new industry standards</p>
        </li>
      </ul>
    </>
  )
}

function FullScreenGallery({ portforlio }: { portforlio: Portfolio }) {
  const galleryImages = [
    { src: portforlio.src || "/placeholder.svg", alt: `${portforlio.title} - Main Image` },
    { src: "/images/beteseb.jpg", alt: `${portforlio.title} - Image 2` },
    { src: "/images/orcas.jpg", alt: `${portforlio.title} - Image 3` },
  ];

  return (
    <div className="px-4 bg-black py-16">
      <div className="max-w-4xl mx-auto px-8 md:px-16 mb-12">
        <h3 className="text-2xl font-light">Gallery</h3>
      </div>
      
      <div className="w-full space-y-0">
        {galleryImages.map((image, index) => (
          <div key={index} className="w-full h-screen">
            <img 
              src={image.src}
              alt={image.alt}
              className="w-full pb-6 h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}