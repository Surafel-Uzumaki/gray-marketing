import Head from "next/head";
import dynamic from "next/dynamic";
import ClientOnly from "../components/ClientOnly";

// Dynamically import components that might use browser APIs
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact Us | WAVES Creative</title>
        <meta
          name="description"
          content="Get in touch with WAVES Creative - Where innovation meets the ocean"
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />

        {/* Contact Content */}
        <main className="flex-grow mt-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 py-20">
            {/* Floating wave shapes - wrapped in ClientOnly */}
            <ClientOnly>
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl opacity-20 animate-float1"></div>
                <div className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-indigo-200 mix-blend-multiply filter blur-xl opacity-20 animate-float2"></div>
              </div>
            </ClientOnly>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Header */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    Contact GRAY'S MARKETING
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Reach out to us - we'd love to hear about your project
                </p>
              </div>

              {/* Contact content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left column - Contact info */}
                <div className="space-y-8">
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      Get In Touch
                    </h2>

                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-blue-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900">
                            Our Studio
                          </h3>
                          <p className="mt-1 text-gray-600">
                            123 Oceanview Drive
                            <br />
                            Malibu, CA 90265
                          </p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-green-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900">
                            Call Us
                          </h3>
                          <a
                            href="tel:+13105557890"
                            className="mt-1 text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            +1 (310) 555-7890
                          </a>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start">
                        <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-purple-600"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <h3 className="text-lg font-bold text-gray-900">
                            Email Us
                          </h3>
                          <a
                            href="mailto:hello@wavescreative.com"
                            className="mt-1 text-gray-600 hover:text-blue-600 transition-colors"
                          >
                            hello@wavescreative.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Business Hours
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Saturday</span>
                        <span className="font-medium">10:00 AM - 4:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span className="text-gray-600">Sunday</span>
                        <span className="font-medium">Closed</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right column - Map */}
                <ClientOnly>
                  <div className="relative h-96 lg:h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.325715672523!2d-118.6764079245309!3d34.03683727315678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e819ccc9a1c3b5%3A0xf1a21c0a4b5a8f3e!2sMalibu%20Beach!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0"
                    ></iframe>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <h3 className="text-white text-xl font-bold">
                        Visit Our Studio
                      </h3>
                      <p className="text-white/90">
                        123 Oceanview Drive, Malibu
                      </p>
                    </div>
                  </div>
                </ClientOnly>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <ClientOnly>
        <style jsx global>{`
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
      </ClientOnly>
    </>
  );
};

export default ContactPage;
