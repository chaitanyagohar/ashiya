"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- Reusable Icon Components ---
const DetailItem = ({ label, value }: { label: string, value: string }) => (
    <div>
        <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest">{label}</p>
        <p className="text-lg text-white">{value}</p>
    </div>
);

const FeatureCard = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay }}
        className="border-t border-gray-800 pt-6"
    >
        <div className="text-[#c82a2b] mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{desc}</p>
    </motion.div>
);


// --- Main Project Page Component ---

export default function AshiyaGezeHqPage() {
  return (
    <div className="bg-[#111111] text-white">
      <main>
        {/* --- Hero Section --- */}
        <section className="h-[70vh] min-h-[500px] relative flex flex-col items-center justify-center text-center">
          <Image
            src="/project-geze-hero.jpg" // Add a hero image for this project
            alt="The main entrance of the ASHIYA GEZE HQ"
            fill
            priority
            className="object-cover absolute z-0"
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div className="relative z-20 px-6">
            <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-4"
            >
              Featured Project
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-7xl font-serif font-bold leading-tight"
            >
              ASHIYA GEZE HQ
            </motion.h1>
          </div>
        </section>

        {/* --- Project Overview Section --- */}
        <section className="py-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Left Column: Project Details */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-1 space-y-8"
              >
                <DetailItem label="Client" value="ASHIYA" />
                <DetailItem label="Location" value="Bengaluru, India" />
                <DetailItem label="Year Completed" value="2024" />
                <DetailItem label="Market" value="Commercial" />
                <DetailItem label="Services" value="Commercial Interiors, GEZE Distribution" />
              </motion.div>

              {/* Right Column: Project Description */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-2"
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">A Showcase of Innovation and Design</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The design of our own headquarters was a unique opportunity to embody our core principles. The goal was to create a dual-purpose space: a highly functional, collaborative workplace for our team and an immersive showroom to demonstrate the capabilities of our commercial interior services and the sophistication of GEZE Germany products.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The resulting design features a minimalist aesthetic with clean lines and a focus on natural light, creating an environment that is both professional and inspiring. Every element, from the automated glass partitions to the ergonomic workstations, was chosen to reflect our commitment to quality, efficiency, and modern design.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* --- Image Gallery --- */}
        <section className="py-16 bg-[#1a1a1a]">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8 }} className="relative h-[500px] w-full rounded-lg overflow-hidden">
                         <Image src="/geze-hq-1.jpg" alt="Interior view of the main office space" fill className="object-cover"/>
                    </motion.div>
                     <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative h-[500px] w-full rounded-lg overflow-hidden">
                         <Image src="/geze-hq-2.jpg" alt="Close up of GEZE door hardware" fill className="object-cover"/>
                    </motion.div>
                </div>
            </div>
        </section>

        {/* --- Solutions Implemented Section --- */}
        <section className="py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-center mb-20">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Key Solutions</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Bringing Technology and Design Together</h2>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-12">
                    <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V8m0 0h-4m4 0l-5-5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 0h-4m4 0l-5 5" /></svg>} title="Automated Glass Partitions" desc="GEZE automated sliding wall systems were used to create flexible meeting spaces that can be opened up or enclosed as needed, maximizing versatility." delay={0.1} />
                    <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>} title="Advanced Access Control" desc="The entire office is secured with a state-of-the-art electronic access system, providing both high security and seamless entry for employees." delay={0.2} />
                    <FeatureCard icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} title="Ergonomic & Smart Lighting" desc="A human-centric lighting system was installed, which adjusts color temperature throughout the day to improve focus and well-being." delay={0.3} />
                </div>
            </div>
        </section>


        {/* --- CTA to other projects --- */}
        <section className="bg-[#1a1a1a] py-32">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Explore More of Our Work
              </h2>
              <p className="text-gray-300 text-lg mb-10">
                Discover how we have transformed spaces for our diverse clientele.
              </p>
              <Link
                href="/clientele"
                className="inline-block bg-[#c82a2b] text-white px-10 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
              >
                View All Projects
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

