"use client";

import Image from "next/image";
import { Reveal } from "../components/animations/Reveal"; 

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-green-500 flex-shrink-0 mr-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export default function AboutPage() {
  return (
    <div className="bg-white text-black pt-32 pb-24">
      {/* --- Section 1: Our Philosophy --- */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <Reveal>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                ABOUT US
              </p>
            </Reveal>
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                At Ashiya, We Build for People, Creating Spaces That Inspire and
                Elevate Everyday Living.
              </h1>
            </Reveal>

            {/* Image without Reveal wrapper */}
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/about1.jpg"
                alt="Modern home interior with pendant lights"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-gray-600 space-y-6 pt-4">
            <Reveal>
              <p>
                At <strong>Ashiya</strong>, our philosophy is simple—we build
                for people. Every structure, interior, and architectural solution
                we craft is designed with the end user in mind. Whether it’s a
                residential home, a commercial workspace, or a large-scale
                civil construction project, we prioritize functionality,
                comfort, and aesthetics to enhance the way people live, work,
                and interact with spaces.
              </p>
            </Reveal>
            <Reveal>
              <p>
                With expertise in <strong>interior design</strong>,{" "}
                <strong>civil construction</strong>, and{" "}
                <strong>premium architectural solutions</strong>, we go beyond
                just building structures—we create environments that foster
                productivity, well-being, and seamless living experiences. Our
                partnership with <strong>GEZE Germany</strong> further enables
                us to integrate state-of-the-art door systems and automated
                solutions, ensuring modern spaces that are safe, efficient, and
                future-ready.
              </p>
            </Reveal>
            <Reveal>
              <p>
                At Ashiya, we don’t just construct buildings—we shape
                experiences, keeping people at the heart of every design and
                innovation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --- Key Features Section --- */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Key Features
              </h2>
            </Reveal>
            <Reveal>
              <p className="text-gray-600 mb-12">
                We redefine spaces, pushing the boundaries of design, technology, and innovation, transforming your environments into living testaments of ingenuity.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <Reveal>
                <div className="group flex flex-col items-center p-4 rounded-lg cursor-pointer">
                  <div className="bg-gray-100 p-4 rounded-full mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69a.75.75 0 01.981.981A10.503 10.503 0 0118 19.5a10.5 10.5 0 01-10.5-10.5c0-1.281.208-2.523.6-3.687a.75.75 0 01.818-.162z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.375a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0z" /></svg>
                  </div>
                  <h3 className="font-semibold transition-transform duration-300 group-hover:-translate-y-2">Innovative Product Range</h3>
                </div>
              </Reveal>
              <Reveal>
                <div className="group flex flex-col items-center p-4 rounded-lg cursor-pointer">
                  <div className="bg-gray-100 p-4 rounded-full mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="font-semibold transition-transform duration-300 group-hover:-translate-y-2">Quality Assurance</h3>
                </div>
              </Reveal>
              <Reveal>
                <div className="group flex flex-col items-center p-4 rounded-lg cursor-pointer">
                  <div className="bg-gray-100 p-4 rounded-full mb-4 transition-transform duration-300 group-hover:-translate-y-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
                  </div>
                  <h3 className="font-semibold transition-transform duration-300 group-hover:-translate-y-2">Exceptional Durability</h3>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Image without Reveal wrapper */}
          <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about3.jpg"
              alt="Drilling into a high-quality door lock"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* --- Section 2: Why Choose Us? --- */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Why Choose US?
                </p>
              </Reveal>
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                  At Ashiya We don&apos;t just build Buildings
                </h2>
              </Reveal>
              <Reveal>
                <p className="text-gray-600 mb-12">
                  We create exceptional spaces that enhance lives. With a
                  commitment to quality, innovation, and customer satisfaction,
                  here’s why we are the preferred choice for interior design,
                  civil construction, and GEZE Germany solutions:
                </p>
              </Reveal>

              <div className="space-y-6">
                {[
                  {
                    title: "South India&apos;s Leading GEZE Distributor",
                    desc: "As an authorized distributor of GEZE Germany, we provide premium door handles, hinges, locks, and automated partitions, along with dedicated sales and after-sales support.",
                  },
                  {
                    title: "Quality & Precision",
                    desc: "We believe in meticulous craftsmanship, superior materials, and cutting-edge technology, ensuring long-lasting and visually stunning results.",
                  },
                  {
                    title: "Tailored to Your Needs",
                    desc: "Every project is customized to reflect your unique vision, whether it’s a luxury home, office space, or large-scale construction project.",
                  },
                  {
                    title: "Sustainability & Future-Ready Approach",
                    desc: "We integrate eco-friendly materials and smart technology, ensuring that our projects are built for the future.",
                  },
                ].map((item, i) => (
                  <Reveal key={i}>
                    <div className="flex">
                      <CheckIcon />
                      <div>
                        <h3
                          className="font-bold text-lg"
                          dangerouslySetInnerHTML={{ __html: item.title }}
                        />
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Image without Reveal wrapper */}
            <div className="relative h-[600px] w-full rounded-lg overflow-hidden shadow-lg mt-8 lg:mt-0">
              <Image
                src="/about2.jpg"
                alt="Interior of a modern shopping mall"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
