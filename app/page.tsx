"use client";

import Image from "next/image";
import { Reveal } from "./components/animations/Reveal";
import { AnimatedCounter } from "./components/animations/AnimatedCounter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <main>
      {/* --- Updated Hero Section --- */}
<section className="h-screen relative flex items-center justify-center text-center">
  {/* Background Image */}
  <Image
    src="/hero.avif"
    alt="Modern architecture background"
    fill
    priority
    className="object-cover absolute z-0"
  />
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* Content */}
  <div className="relative z-20 flex flex-col items-center space-y-6 px-6 md:px-12">
    <Reveal>
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
        We are an architectural firm based in Wellington.
      </h1>
    </Reveal>
    <Reveal>
      <p className="text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow">
        Crafting innovative, functional, and aesthetically striking spaces that transform your vision into reality.
      </p>
    </Reveal>
    <Reveal>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
        {/* Contact Us Button */}
        <Link href="/contact" className="group">
          <button className="cursor-pointer bg-[#c82a2b] text-white px-8 py-3 rounded-full transition-all duration-300 font-semibold shadow-lg flex items-center justify-center space-x-2
                   hover:bg-black hover:border hover:border-whitebg-[#c82a2b] text-white px-8 py-3 rounded-full border border-transparent transition-all duration-300 font-semibold shadow-lg flex items-center justify-center space-x-2 hover:bg-black hover:border-white">
            <span>Contact Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </Link>

        {/* Learn More Button */}
        <Link href="/about" className="group">
          <button className="cursor-pointer bg-white text-black px-8 py-3 rounded-full transition-colors font-semibold shadow-lg flex items-center justify-center space-x-2 hover:bg-black hover:text-white">
            <span>Learn More</span>
            
          </button>
        </Link>
      </div>
    </Reveal>
  </div>
</section>




        {/* --- About Section (Remains the same) --- */}
        <section id="about" className="bg-white py-40">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-20 items-start">
              {/* Left Column */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <Reveal>
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      ABOUT OUR COMPANY
                    </p>
                  </Reveal>
                  <Reveal>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                      We provide professional solutions to deliver safe & efficient projects.
                    </h3>
                  </Reveal>
                  <Reveal>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                      Archisphere is a leading name in interior design, civil construction, and premium architectural solutions. We specialize in crafting innovative, functional, and aesthetically striking spaces, ensuring excellence in every project. With a commitment to quality, innovation, and customer satisfaction, Archisphere transforms spaces into inspiring, efficient, and timeless environments.
                    </p>
                  </Reveal>
                  <Reveal>
                    <button className="bg-white text-black px-8 py-3 rounded-full flex items-center justify-center space-x-2 border border-black transition-colors duration-300 group hover:bg-black hover:text-white mt-8">
                      <span>READ MORE</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </Reveal>
                </div>

                {/* Stats Section */}
                <div className="mt-16 pt-12 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-12 text-center sm:text-left">
                  <Reveal width="100%">
                    <div className="hover:scale-105 transition-transform duration-300">
                      <p className="text-4xl font-bold text-black flex items-center justify-center sm:justify-start">
                        <AnimatedCounter value={50} />
                        <span>+</span>
                      </p>
                      <p className="text-gray-600 mt-2">In-Progress Sites</p>
                    </div>
                  </Reveal>
                  <Reveal width="100%">
                    <div className="hover:scale-105 transition-transform duration-300">
                      <p className="text-4xl font-bold text-black flex items-center justify-center sm:justify-start">
                        <AnimatedCounter value={700} />
                        <span>+</span>
                      </p>
                      <p className="text-gray-600 mt-2">Projects Completed</p>
                    </div>
                  </Reveal>
                  <Reveal width="100%">
                    <div className="hover:scale-105 transition-transform duration-300">
                      <p className="text-4xl font-bold text-black flex items-center justify-center sm:justify-start">
                        <AnimatedCounter value={200} />
                        <span>+</span>
                      </p>
                      <p className="text-gray-600 mt-2">Corporate Clients</p>
                    </div>
                  </Reveal>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="h-[600px] w-full relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/home2.avif"
                  alt="Modern architecture"
                  fill
                  priority
                  className="object-cover absolute z-0"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Services Section (Remains the same) --- */}
        <section id="services" className="bg-gray-50 py-40">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-x-12 gap-y-20">
              {/* Left: Main Service Intro */}
              <div className="flex flex-col justify-center">
                <Reveal>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    OUR SERVICES
                  </p>
                </Reveal>
                <Reveal>
                  <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-8">
                    We Offer a Range of Services to Meet All Types of Needs.
                  </h3>
                </Reveal>
                <Reveal>
                  <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2 w-fit mt-8">
                    <span>ALL SERVICES</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M4.293 15.707a1 1 0 010-1.414L8.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Reveal>
              </div>

              {/* Right: Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
                {[
                  {
                    title: "COMMERCIAL INTERIORS",
                    desc: "We design modern, functional, and inspiring commercial interiors that enhance productivity and reflect your brand identity.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h-2" />
                      </svg>
                    ),
                  },
                  {
                    title: "RESIDENTIAL INTERIORS",
                    desc: "We create beautiful, functional, and personalized residential interiors that reflect your lifestyle.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h3v-9a2 2 0 00-2-2H9a2 2 0 00-2 2v9h3m-6 0h6" />
                      </svg>
                    ),
                  },
                  {
                    title: "CIVIL CONSTRUCTIONS",
                    desc: "We specialize in high-quality civil construction, delivering residential, commercial, and industrial projects with precision.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m7 0V5a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h-2" />
                      </svg>
                    ),
                  },
                  {
                    title: "GEZE GERMANY",
                    desc: "Archisphere is South India's authorized partner for GEZE, delivering premium hardware solutions.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map((service, index) => (
                  <Reveal key={index}>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col gap-4">
                      <div className="text-[#c82a2b]">{service.icon}</div>
                      <h4 className="text-xl font-bold">{service.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Clients Section (Remains the same) --- */}
        <section id="clients" className="bg-black text-white py-40">
          <div className="container mx-auto px-4 text-center max-w-7xl">
            <Reveal width="100%">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                OUR END USERS
              </p>
            </Reveal>
            <Reveal width="100%">
              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-16">
                We Believe Every Client Is a Valuable Long-Term Partner.
              </h3>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12 items-center justify-items-center max-w-6xl mx-auto">
              {[
                { name: "Microsoft", src: "/logo1.png" },
                { name: "Visa", src: "/logo2.png" },
                { name: "Amazon", src: "/logo3.jpg" },
                { name: "Goldman Sachs", src: "/logo4.png" },
                { name: "ABB", src: "/logo5.png" },
                { name: "Google", src: "/logo6.webp" },
                { name: "Intel", src: "/logo7.svg" },
                { name: "Qualcomm", src: "/logo8.png" },
                { name: "Walmart", src: "/logo9.png" },
                { name: "Mercedes-Benz", src: "/logo10.png" },
              ].map((client, index) => (
                <div
                  key={index}
                  className="w-32 h-16 relative flex items-center justify-center p-2"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

