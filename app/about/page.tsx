"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- Reusable Icon Components ---

const CheckIcon = () => (
  <svg className="h-6 w-6 text-[#c82a2b] flex-shrink-0 mr-4 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ValueCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay }}
        className="text-center md:text-left"
    >
        <div className="flex justify-center md:justify-start text-[#c82a2b] mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </motion.div>
);


// --- Main About Page Component ---

export default function AboutPage() {
  const listVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const features = [
    { title: "South India's Leading GEZE Distributor", desc: "As an authorized distributor of GEZE Germany, we provide premium door handles, hinges, locks, and automated partitions." },
    { title: "Quality & Precision", desc: "We believe in meticulous craftsmanship, superior materials, and cutting-edge technology for long-lasting results." },
    { title: "Tailored to Your Needs", desc: "Every project is customized to reflect your unique vision, whether it’s a luxury home, office, or large-scale construction." },
    { title: "Sustainability & Future-Ready Approach", desc: "We integrate eco-friendly materials and smart technology, ensuring our projects are built for the future." },
  ];

  return (
    <div className="bg-[#111111] text-white">
      <main>
        {/* --- Hero Section --- */}
        <section className="h-[70vh] min-h-[500px] relative flex flex-col items-center justify-center text-center">
          <Image src="/about-hero.jpg" alt="Team collaborating in a modern office" fill priority className="object-cover absolute z-0" />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 px-6">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-7xl font-serif font-bold leading-tight">
              Our Story of Creation
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-gray-300">
              We are a collective of visionary designers, architects, and builders dedicated to crafting spaces that inspire and endure.
            </motion.p>
          </div>
        </section>

        {/* --- Philosophy Section --- */}
        <section className="py-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }}>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Our Mission</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">Building for People, Designing for Life.</h2>
                <p className="text-gray-300 leading-relaxed mb-4">At Ashiya, our philosophy is simple: we build for people. Every structure is designed with the end user in mind, prioritizing functionality, comfort, and aesthetics to enhance the way people live and work.</p>
                <p className="text-gray-300 leading-relaxed">With expertise in interior design, civil construction, and our partnership with GEZE Germany, we go beyond mere construction. We create environments that foster productivity, well-being, and seamless living experiences.</p>
              </motion.div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="h-[500px] w-full relative rounded-lg overflow-hidden">
                <Image src="/about1.jpg" alt="A beautifully designed modern living room" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Our Core Values Section --- */}
        <section className="bg-[#1a1a1a] py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-center mb-20">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Our Principles</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">The Foundation of Our Work</h2>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-12">
                    <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-12v4m-2-2h4m5 6v4m-2-2h4M17 3l4 4M3 17l4 4" /></svg>} title="Innovation" desc="We constantly push creative boundaries, integrating the latest technologies and materials to deliver forward-thinking solutions." delay={0.1} />
                    <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>} title="Integrity" desc="Our commitment to honesty and transparency builds lasting relationships with our clients, partners, and community." delay={0.2} />
                    <ValueCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>} title="Excellence" desc="From the initial concept to the final detail, we pursue the highest standards of quality in every aspect of our work." delay={0.3} />
                </div>
            </div>
        </section>

        {/* --- Why Choose Us Section --- */}
        <section className="bg-[#1a1a1a] py-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="h-[600px] w-full relative rounded-lg overflow-hidden lg:order-last">
                <Image src="/about2.jpg" alt="Architectural detail of a modern building" fill className="object-cover" />
              </motion.div>
               <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.1 }}>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Why Choose Ashiya</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-8">A Commitment to Excellence in Every Detail.</h2>
                <div className="space-y-6">
                  {features.map((feature, i) => (
                    <motion.div key={i} variants={listVariants} custom={i} className="flex items-start">
                      <CheckIcon />
                      <div>
                        <h3 className="font-bold text-lg">{feature.title}</h3>
                        <p className="text-gray-400">{feature.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- CTA Section --- */}
        <section className="bg-[#111111] py-32">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">Ready to Build Your Vision?</h2>
              <p className="text-gray-300 text-lg mb-10">Let&apos;s discuss how we can bring your next project to life.</p>
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

