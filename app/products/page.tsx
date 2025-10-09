"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const productCategories = [
  { name: "Door Hardware", imageUrl: "/pro1.jpg", description: "High-quality handles, hinges, and locks designed for modern architecture." },
  { name: "Entrance Systems", imageUrl: "/pro2.jpg", description: "Automated and manual entrance solutions that combine security with elegance." },
  { name: "Interior Glass Systems", imageUrl: "/pro3.jpg", description: "Secure and stylish fittings for seamless glass installations in any interior." },
  { name: "Glass Cabins", imageUrl: "/pro4.jpeg", description: "Modular and custom glass cabin solutions for offices and commercial spaces." },
  { name: "Electronic Access & Control", imageUrl: "/pro5.jpeg", description: "Advanced security systems for enhanced safety and convenient access." },
  { name: "Movable Walls", imageUrl: "/pro6.jpeg", description: "Smart, space-saving automated partitions for versatile and dynamic interiors." },
];

const QualityFeature = ({ icon, title, desc, delay }: { icon: React.ReactNode, title: string, desc: string, delay: number }) => (
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


export default function ProductsPage() {
  return (
    <div className="bg-[#111111] text-white">
      <main>
        {/* --- Hero Section --- */}
        <section className="h-[70vh] min-h-[500px] relative flex flex-col items-center justify-center text-center">
          <Image
            src="/product-hero.jpg"
            alt="Close-up of premium architectural hardware"
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
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-gray-300"
            >
              Featuring best-in-class architectural solutions from GEZE Germany.
            </motion.p>
          </div>
        </section>

        {/* --- Partnership Section --- */}
        <section className="py-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }} 
                whileInView={{ opacity: 1, x: 0 }} 
                viewport={{ once: true, amount: 0.3 }} 
                transition={{ duration: 0.8 }}
              >
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">A Mark of Quality</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-6">Our Partnership with GEZE Germany</h2>
                <p className="text-gray-300 leading-relaxed mb-4">As South India’s trusted distributor for GEZE, we bring world-renowned German engineering to your doorstep. This partnership allows us to offer a premium range of architectural hardware and automation solutions that are globally recognized for their innovation, durability, and design excellence.</p>
                <p className="text-gray-300 leading-relaxed">Every GEZE product we supply is a promise of quality, ensuring your project benefits from state-of-the-art technology and timeless aesthetics.</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true, amount: 0.3 }} 
                transition={{ duration: 0.8 }} 
                className="h-[500px] w-full relative rounded-lg overflow-hidden"
              >
                <Image src="/producttop.jpeg" alt="GEZE Germany branded hardware" fill className="object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- Products Grid Section --- */}
        <section className="bg-[#1a1a1a] py-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-center mb-16">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Product Categories</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Explore Our Range</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {productCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group"
                >
                  <div className="overflow-hidden mb-4 rounded-lg relative">
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover aspect-[3/2] transition-transform duration-500 group-hover:scale-105"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                        <p className="text-white text-sm">{category.description}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-center group-hover:text-[#c82a2b] transition-colors duration-300">
                    {category.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- NEW: Commitment to Quality Section --- */}
        <section className="bg-[#111111] py-32">
            <div className="container mx-auto px-4 max-w-7xl">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.8 }} className="text-center mb-20">
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Our Commitment</p>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold">Engineered for Excellence</h2>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-12">
                    <QualityFeature icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V4m0 16v-2M8 8l2-2 2 2m0 8l2 2 2-2M8 16l-2-2-2 2" /></svg>} title="Precision Engineering" desc="Every product we offer is a result of meticulous design and engineering, ensuring flawless performance." delay={0.1} />
                    <QualityFeature icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.417l4.5-4.5M12 14a2 2 0 100-4 2 2 0 000 4z" /></svg>} title="Unmatched Durability" desc="We select materials and products that are built to last, offering long-term value and peace of mind." delay={0.2} />
                    <QualityFeature icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>} title="Dedicated Support" desc="Our commitment extends beyond the sale, with dedicated after-sales support to ensure seamless integration and performance." delay={0.3} />
                </div>
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
                Have a Question About Our Products?
              </h2>
              <p className="text-gray-300 text-lg mb-10">
                Our team is ready to provide you with the information and support you need.
              </p>
              <Link href="/contact">
                <button className="bg-[#c82a2b] text-white px-10 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105">
                  Contact Us
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

