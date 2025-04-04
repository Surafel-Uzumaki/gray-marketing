import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import ClientOnly from "../components/ClientOnly";

// Dynamically import components that might use browser APIs
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });
const PartnershipsContent = dynamic(() => import("../components/WhoWeWork"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[50vh] flex items-center justify-center">
      Loading content...
    </div>
  ),
});

const PartnershipsPage = () => {
  return (
    <>
      <Head>
        <title>Our Story | Gray's Marketing</title>
        <meta
          name="description"
          content="Discover our valued partnerships and collaborations"
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        <ClientOnly>
          {/* Company Story Section */}
          <section className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* Decorative Waves */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-300 to-transparent opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-blue-300 to-transparent opacity-30"></div>

            <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                  Our <span className="text-blue-600">Story</span>
                </h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
              </div>

              <div className="prose prose-lg text-gray-700 mx-auto">
                {/* Animated Quote */}
                <p className="text-center italic mb-10 text-xl text-gray-600 relative before:content">
                  "Like waves shaping the shore, we believe in the power of
                  persistent, purposeful action."
                </p>

                {/* Text Content */}
                <div className="relative space-y-6 p-6 bg-white shadow-lg rounded-lg">
                  <p className="leading-relaxed">
                    Founded in <strong className="text-blue-600">2015</strong>{" "}
                    on the shores of Malibu, WAVES Creative began as a small
                    collective of designers and strategists united by a shared
                    vision: to create marketing that moves people as powerfully
                    as the ocean moves the world.
                  </p>

                  <p className="leading-relaxed">
                    What started as beachside brainstorming sessions between
                    surf breaks has grown into a full-service creative agency,
                    yet we've maintained our{" "}
                    <span className="text-blue-600 font-medium">
                      fluid approach
                    </span>{" "}
                    to brand building. We've learned that the best strategies,
                    like ocean currents, must be both strong and adaptable.
                  </p>

                  <p className="leading-relaxed">
                    Today, we partner with brands who share our values of{" "}
                    <strong className="text-blue-600">integrity</strong> and{" "}
                    <strong className="text-blue-600">innovation</strong>,
                    helping them navigate the ever-changing marketing landscape
                    with confidence and creativity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Foundation Cards Section */}
          <section className="relative py-8 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  Our <span className="text-blue-600">Foundation</span>
                </h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Mission Card */}
                <div className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Mission</h3>
                  </div>
                  <p className="text-gray-600">
                    To create marketing that moves people like the ocean moves
                    the world through authentic connections.
                  </p>
                </div>

                {/* Vision Card */}
                <div className="bg-white p-6 rounded-xl border-2 border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Vision</h3>
                  </div>
                  <p className="text-gray-600">
                    To be the most trusted creative partner for brands
                    navigating the changing tides of digital marketing.
                  </p>
                </div>

                {/* Goals Card */}
                <div className="bg-white p-6 rounded-xl border-2 border-blue-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">Goals</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Deliver measurable impact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Foster long-term partnerships</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Push creative boundaries</span>
                    </li>
                  </ul>
                </div>

                {/* Values Card */}
                <div className="bg-white p-6 rounded-xl border-2 border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-indigo-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">
                      Core Values
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Integrity",
                      "Innovation",
                      "Collaboration",
                      "Excellence",
                      "Adaptability",
                    ].map((value, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <main className="flex-grow">
            <PartnershipsContent />
          </main>
        </ClientOnly>

        <Footer />
      </div>
    </>
  );
};

export default PartnershipsPage;
