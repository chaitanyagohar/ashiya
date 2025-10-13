"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// --- Dynamic Logo Component ---
const DynamicLogo = ({ baseSrc, name }: { baseSrc: string, name: string }) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const extensions = ["jpg","png","jpeg"];

  useEffect(() => {
    let isMounted = true;
    
    const findImage = async () => {
      for (const ext of extensions) {
        const potentialSrc = `${baseSrc}.${ext}`;
        try {
          const response = await fetch(potentialSrc);
          if (response.ok && isMounted) {
            setImgSrc(potentialSrc);
            return;
          }
        } catch (error) {
          // Silently fail and try the next extension
        }
      }
    };

    findImage();

    return () => {
      isMounted = false;
    };
  }, [baseSrc]);

  if (!imgSrc) {
    return <div className="w-full h-full bg-gray-800/50 rounded animate-pulse" />;
  }

  return (
    <Image
      src={imgSrc}
      alt={name}
      fill
      className="object-contain"
    />
  );
};


// --- Data for Client Logos ---
const clientNames = [
  "ABB", "ACE", "Adrianse", "AECOM", "Aeries Analytics", "AETRIO", "Alpha Trading Company", "Amazon", 
  "Amazon Pay", "Amart", "ANSR", "Aparna Craft", "Arcadis", "Artizen", "Aspigo Ventures", "Baker Tilly", 
  "Beckman Coulter", "Bluebeam", "Blume", "BNY Mellon", "Bosch", "Cigna", "DM", "Dover", "Doughtwc", 
  "DP World", "Eight Roads", "EisnerAmper", "Eleganz", "EMBA&CV", "Fair Isaac", "Fidelity", "Flutech", 
  "Freshworks", "Genpact", "Google", "Google Analytics", "Infineon", "Interia", "Invecas", "JLL", 
  "Kalyani", "Kaplan", "Kion Group", "Knight Frank", "KPMG", "Lokus Labs", "Maersk Line", "Marelli", 
  "Marlabs", "Mediatek", "Mercedes-Benz", "Micron Elect", "Microsoft", "Modicare", "Modul M", 
  "Moody's Analytics", "Morgan Stanley", "Mphasis", "Myntra", "Mysore Lights", "Nag Interiors", 
  "Natixi", "NCSI", "Nestle", "Northsta", "NSN", "NXP", "Ocean", "Oculus", "Om Sai Intex", "Padams", 
  "Paragon", "Parexel", "Peekay Steel", "PepsiCo", "Polaris", "Pragathi", "Pratikart", "Prestige Group", 
  "Prosus", "R3 Framestore", "RA Chem Pharma", "Razorpay", "Regal", "Reliance", "RMZ", "Rockstar Games", 
  "Rockwell Collins", "RSP", "Safran", "Saint-Gobain", "Samco", "SAP", "Seating World", "Sequoia", 
  "ServiceNow", "Shapoorji Pallonji", "Shivani", "Siemens", "Signify", "SmartWork", "Smartworks", 
  "Societe Generale", "Sonata", "Space Matrix", "Spacetheory", "SR", "Swastik Group", "SWBI", 
  "Swiss Re", "Synopsys", "Talin", "Target", "Tech Mahindra", "Tesco", "Teva", "Thomson Reuters", 
  "3Concepts", "3M", "Trendence", "True Beacon", "Uber", "Urban East", "Vaibhav", "Vaishnavi Group", 
  "Valspace", "Vestian", "Visa", "VMware", "Welco", "Wells Fargo", "Wesco", "WeWork", "Wipro", 
  "Yiterra", "ZS","logo141","logo142","logo143","logo144","logo145","logo146","logo147","logo148","logo149","logo150","logo151","logo152",
];

const clientLogos = clientNames.map((name, index) => ({
    baseSrc: `/company/logo${index + 1}`,
    name: name,
}));


export default function ClientelePage() {
  return (
    <div className="bg-[#111111] text-white">
      <main>
        {/* --- Hero Section --- */}
        <section className="h-[70vh] min-h-[500px] relative flex flex-col items-center justify-center text-center">
          <Image
            src="/about5.avif"
            alt="A modern, bustling city skyline representing diverse clients"
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
              Our Esteemed Clientele
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-gray-300"
            >
              We are proud to have partnered with a diverse range of industry leaders, innovators, and visionaries.
            </motion.p>
          </div>
        </section>

        {/* --- "Wall of Logos" Section --- */}
        <section className="py-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">Trusted By The Best</p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold">A Legacy of Successful Partnerships</h2>
            </motion.div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-8 gap-y-12 items-center justify-center">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
                  // --- MODIFIED: Changed w-32 to w-full for flexible width ---
                  className="relative w-full h-20 p-2 transition-transform duration-300 hover:scale-110"
                >
                  <DynamicLogo baseSrc={logo.baseSrc} name={logo.name} />
                </div>
              ))}
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
                Join Our Roster of Valued Clients
              </h2>
              <p className="text-gray-300 text-lg mb-10">
                Let&apos;s discuss how we can bring your next project to life with the same commitment to excellence.
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

