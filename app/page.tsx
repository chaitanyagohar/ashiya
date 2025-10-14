"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

// --- Reusable Animated Counter ---
const AnimatedCounter = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return controls.stop;
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}</span>;
};

// --- Main Home Page Component ---
export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  const services = [
    {
      title: "Commercial Interiors",
      desc: "Innovative designs that reflect your brand's identity and boost productivity.",
      img: "/comm2.avif",
    },
    {
      title: "Residential Interiors",
      desc: "Creating personalized, luxurious spaces that reflect your unique lifestyle.",
      img: "/residential.avif",
    },
    {
      title: "Civil Constructions",
      desc: "High-quality construction with a focus on precision, durability, and innovation.",
      img: "/service.avif",
    },
    {
      title: "Geze Architectural Solutions",
      desc: "Premium, functional, and aesthetically striking designs for timeless environments.",
      img: "/geze.jpeg",
    },
  ];

  // const projects = [
  //   {
  //     title: "Ritz-Carlton Penthouse",
  //     location: "Wellington, NZ",
  //     img: "/project1.jpg",
  //   },
  //   {
  //     title: "Modernist Villa",
  //     location: "Queenstown, NZ",
  //     img: "/project2.jpg",
  //   },
  //   { title: "Corporate HQ", location: "Auckland, NZ", img: "/project3.jpg" },
  // ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation & Vision",
      description:
        "We begin by understanding your vision, needs, and objectives to establish a clear foundation for the project.",
    },
    {
      number: "02",
      title: "Concept & Design",
      description:
        "Our team develops initial concepts, creating detailed drawings and 3D renderings to bring the vision to life.",
    },
    {
      number: "03",
      title: "Construction & Execution",
      description:
        "With meticulous project management, we execute the design with precision, ensuring quality at every stage.",
    },
    {
      number: "04",
      title: "Handover & Support",
      description:
        "We deliver the completed project and provide ongoing support to ensure your total satisfaction.",
    },
  ];

  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.jpg",
    "/logo4.png",
    "/logo5.png",
    "/logo6.webp",
    "/logo7.svg",
    "/logo8.png",
    "/logo9.png",
    "/logo10.png",
  ];

  return (
    <div className="bg-[#111111] text-white">
      <main>
        {/* --- Hero Section with Parallax Scroll --- */}
        <motion.section
          ref={targetRef}
          className="h-screen w-full flex flex-col items-center justify-center text-center relative"
        >
          <motion.div
            style={{ opacity, position }}
            className="inset-0 h-screen w-full"
          >
            <motion.div style={{ scale }} className="h-full w-full relative">
              <Image
                src="/hero-main.webp"
                alt="Modern architecture background"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </motion.div>
          </motion.div>
          <div className="relative z-10 flex flex-col items-center space-y-6 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-serif font-bold leading-tight"
            >
              Timeless Design, Modern Vision.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-2xl text-white"
            >
              We craft exceptional spaces where innovation meets elegance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/contact">
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-transparent hover:text-white border-2 border-transparent hover:border-white">
                  Start a Project
                </button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
          >
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </motion.div>
        </motion.section>

        {/* --- About & Stats Section --- */}
        <section className="bg-[#111111] py-32 relative z-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Our Philosophy
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">
                  Architecture is the art of turning vision into reality.
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Ashiya is a collective of visionary designers and builders
                  dedicated to crafting spaces that inspire and endure. We merge
                  timeless aesthetics with modern functionality, ensuring every
                  project is a testament to quality, innovation, and our
                  clients&apos; aspirations.
                </p>
                <div className="mt-12 pt-8 border-t border-gray-700 grid grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-4xl font-bold">
                      <AnimatedCounter value={700} />+
                    </p>
                    <p className="text-gray-400 mt-1">Projects</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">
                      <AnimatedCounter value={200} />+
                    </p>
                    <p className="text-gray-400 mt-1">Clients</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold">
                      <AnimatedCounter value={50} />+
                    </p>
                    <p className="text-gray-400 mt-1">Awards</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="h-[600px] w-full relative rounded-lg overflow-hidden"
              >
                <Image
                  src="/home2.avif"
                  alt="Elegant interior design"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Services Showcase Section --- */}
        <section className="bg-[#1a1a1a] py-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                What We Do
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Our Services
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-lg"
                >
                  <div className="h-96 w-full relative">
                    <Image
                      src={service.img}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Featured Project Spotlight Section --- */}
        <section className="bg-[#111111] py-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Our Work
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Featured Project
              </h2>
            </motion.div>

            {/* Spotlight Project */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Video */}
              <div className="relative h-[500px]  overflow-hidden lg:order-last">
                <video
                  src="/file.mp4" // Replace with your video path
                  className="w-full h-full object-cover "
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>

              {/* Text Info */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl md:text-3xl font-serif font-bold">
                  ASHIYA GEZE HQ
                </h3>
                <p className="text-gray-400 mt-2">Year Completed: 2024</p>
                <p className="text-gray-400 mt-2">Market: Commercial</p>
                <Link href="/projects/ashiya-geze-hq">
                  <button className="mt-6 text-white font-semibold group transition-all duration-300">
                    View Project
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#c82a2b]"></span>
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- NEW: Our Process Section --- */}
        <section className="bg-[#1a1a1a] py-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Our Approach
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold">
                Our Design & Build Process
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="p-8 border-l border-gray-700"
                >
                  <p className="text-4xl font-serif font-bold text-[#c82a2b] mb-4">
                    {step.number}
                  </p>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NEW: Testimonials Section --- */}
        <section className="bg-[#111111] py-32">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg md:text-2xl font-serif leading-relaxed text-gray-300">
                &quot;Working with Ashiya was a transformative experience. Their
                attention to detail and commitment to quality is unparalleled.
                They didn&apos;t just build our office space , they created better than our perception&quot;
              </p>
              <p className="mt-8 font-semibold uppercase tracking-wider text-gray-400">
                - Babu Poovan , Miginfra
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- Client Logos Marquee Section --- */}
        <section className="bg-[#111111] py-24 overflow-hidden border-t border-b border-gray-800">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-serif font-bold text-gray-400">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="flex animate-marquee-infinite">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="w-48 h-16 relative flex-shrink-0 mx-8"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  fill
                  className="object-contain "
                />
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="bg-[#1a1a1a] py-32">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Let&apos;s Create Something Timeless Together.
              </h2>
              <p className="text-gray-300 text-lg mb-10">
                Have a project in mind? We&apos;d love to hear about it.
              </p>
              <Link href="/contact">
                <button className="bg-[#c82a2b] text-white px-10 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105">
                  Get in Touch
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee-infinite {
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
