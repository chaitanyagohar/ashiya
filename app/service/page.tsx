"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// A simple checkmark icon for lists, styled for the new dark theme
const CheckIcon = () => (
  <svg
    className="h-6 w-6 text-[#c82a2b] flex-shrink-0 mr-4 mt-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const servicesData = [
  {
    imageUrl: "/comm.avif",
    title: "COMMERCIAL INTERIORS",
    description: "At Ashiya, we create modern, functional, and aesthetically refined commercial interiors that enhance productivity, brand identity, and user experience.",
    expertiseTitle: "Our Commercial Interior Expertise:",
    points: [
      "Office Interiors: Designing dynamic workspaces that boost efficiency and reflect your corporate culture.",
      "Retail & Showroom Design: Crafting engaging layouts that elevate the customer journey and amplify brand presence.",
      "Hospitality & F&B Spaces: Creating elegant, immersive designs for restaurants, hotels, and cafes.",
      "Smart & Space-Saving Solutions: Integrating GEZE's automated partitions for versatile, intelligent spaces.",
    ],
  },
  {
    imageUrl: "/home3.avif",
    title: "RESIDENTIAL INTERIORS",
    description: "We design luxurious, comfortable, and personalized residential interiors that reflect your unique style, blending aesthetic appeal with smart design solutions.",
    expertiseTitle: "Our Residential Interior Expertise:",
    points: [
      "Luxury Living Rooms: Curating elegant designs that balance sophisticated style with everyday comfort.",
      "Modern Kitchens: Engineering smart, efficient, and beautifully crafted spaces for seamless functionality.",
      "Stylish Bedrooms: Designing personalized sanctuaries intended for ultimate relaxation and peace.",
      "Innovative Space Optimization: Developing intelligent layouts that maximize space while enhancing aesthetics.",
    ],
  },
  {
    imageUrl: "/civil.jpg",
    title: "CIVIL CONSTRUCTION",
    description: "We specialize in high-quality civil construction, delivering projects that stand the test of time with a focus on innovation, structural integrity, and superior craftsmanship.",
    expertiseTitle: "Our Civil Construction Expertise:",
    points: [
        "Residential & Commercial Construction: Executing well-planned, high-quality developments from foundation to finish.",
        "Structural Engineering & Design: Applying advanced engineering to ensure long-lasting strength.",
        "Renovation & Remodeling: Transforming existing structures into modern, efficient, and aesthetically superior spaces.",
        "Project Management & Execution: Guaranteeing seamless coordination, timely delivery, and cost-effective solutions.",
    ],
  },
  {
    imageUrl: "/geze.jpeg",
    title: "GEZE",
    description: "As South India’s trusted distributor of GEZE , we offer a premium range of architectural hardware and automation solutions to enhance functionality and safety.",
    expertiseTitle: "Our GEZE Product Range:",
    points: [
        "Door Handles, Hinges & Locks: Supplying high-quality, durable, and stylish hardware for modern architecture.",
        "Glass Fittings & Accessories: Providing elegant and secure solutions for seamless glass installations.",
        "Automated Partitions: Offering smart, space-saving solutions for versatile and dynamic interiors.",
        "Sales & After-Sales Support: Delivering dedicated service to ensure seamless integration and long-term performance.",
    ],
  },
];

const processSteps = [
    { number: "01", title: "Consultation & Vision", description: "We begin by understanding your vision, needs, and objectives to establish a clear foundation for the project." },
    { number: "02", title: "Concept & Design", description: "Our team develops initial concepts, creating detailed drawings and 3D renderings to bring the vision to life." },
    { number: "03", title: "Execution & Management", description: "With meticulous project management, we execute the design with precision, ensuring quality at every stage." },
    { number: "04", title: "Handover & Support", description: "We deliver the completed project and provide ongoing support to ensure your total satisfaction." },
];


export default function ServicesPage() {
  const listVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="bg-[#111111] text-white">
      <main>
        {/* --- Hero Section --- */}
        <section className="h-[70vh] min-h-[500px] relative flex flex-col items-center justify-center text-center">
          <Image
            src="/about4.jpg"
            alt="Blueprint of a modern architectural design"
            fill
            priority
            className="object-cover absolute z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 px-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-serif font-bold leading-tight"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-gray-300"
            >
              Delivering excellence and innovation across every facet of design and construction.
            </motion.p>
          </div>
        </section>

        {/* --- Services Sections --- */}
        <div className="py-32 space-y-32">
          {servicesData.map((service, index) => (
            <section key={index} className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className={`h-[600px] w-full relative rounded-lg overflow-hidden ${index % 2 !== 0 ? "lg:order-last" : ""}`}
                >
                    <Image
                        src={service.imageUrl}
                        alt={`${service.title} service image`}
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">{service.title}</h2>
                    <p className="text-gray-300 leading-relaxed mb-8">{service.description}</p>
                    <h3 className="text-xl font-bold mb-4">{service.expertiseTitle}</h3>
                    <div className="space-y-4">
                        {service.points.map((point, i) => (
                            <motion.div key={i} variants={listVariants} custom={i} className="flex items-start">
                                <CheckIcon />
                                <span className="text-gray-400">{point}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
              </div>
            </section>
          ))}
        </div>

        {/* --- NEW: Our Service Process Section --- */}
        <section className="bg-[#1a1a1a] py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-center mb-20">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Our Approach</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">A Structured Path to Perfection</h2>
                </motion.div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {processSteps.map((step, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: index * 0.1 }} className="p-8 border-l border-gray-700">
                            <p className="text-4xl font-serif font-bold text-[#c82a2b] mb-4">{step.number}</p>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* --- NEW: Testimonial Section --- */}
        <section className="bg-[#111111] py-32">
            <div className="container mx-auto px-4 max-w-3xl text-center">
                 <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
                    <p className="text-lg md:text-2xl font-serif leading-relaxed text-gray-300">
                        &quot;The commercial interior designed by Ashiya has completely transformed our workspace. Their professionalism and innovative approach resulted in a space that is both functional and inspiring.&quot;
                    </p>
                    <p className="mt-8 font-semibold uppercase tracking-wider text-gray-400">- Corporate Client, Wellington</p>
                 </motion.div>
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
                Ready to Build Your Vision?
              </h2>
              <p className="text-gray-300 text-lg mb-10">
                Let&apos;s discuss how we can bring your next project to life.
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
    </div>
  );
}

