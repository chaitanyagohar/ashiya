"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// --- Dynamic Logo Component (No changes needed here) ---
const DynamicLogo = ({ baseSrc, name }: { baseSrc: string, name: string }) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const extensions = ["png", "jpg", "jpeg"];

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


// --- Data for Client Logos (Corrected to match filenames) ---
const clientNames = [
    "3concpets", "3m", "abb", "ace build logo", "adraince logo", "aecom", "aeries", "aetrio logo", 
    "alpha logo", "alpha modular logo", "altimetrik india", "amart logo", "amazon development", "amazon pay", 
    "amazon", "amd", "anj logo", "ansr cigna", "ansr", "aparna logo", "aradhana logo", "arcadis", 
    "asatha logo", "ascendas", "aspire logo", "athena health", "audi", "awfis", "azentio", "azim university", 
    "baker hughes", "beckman coulter", "beryll logo", "bial", "bluebeam logo", "blume global", "bny mellon", 
    "borgwarner", "bosch", "brigade", "canvas", "cbre", "cgi", "cgs systems", "chegg", "cherry logo", 
    "cloudera", "cmpss india", "cognizant", "commscope", "companies logo", "credit agricol", "crm services", 
    "crystal modular", "dassault systems", "dazn software", "de prod logo", "de shaw", "deko logo", 
    "deloitte", "dover india", "dp world", "eightroads", "eisner amper", "elegant logo", "eleganz logo", 
    "embassy business", "exotic logo", "experience momentum", "fabcare", "fair issac india", "fidelity", 
    "flutech logo", "foriegn common wealth", "framestore", "freshworks", "fyerssecurities", "genpact", 
    "global bussiness", "global calcium", "google analytics", "google coonect", "google", "gravity logo", 
    "green core logo", "hcl tech", "hcl technologies", "herbalife", "hilton hotel", "hindustan unilever logo", 
    "hp", "hsbc", "hul", "hytek logo", "ivalue", "ibm", "igi logo", "impetus", "indegene", "indigatech logo", 
    "indiqube", "inflneon technologies", "infosys", "infrasys logo", "ingka services", "innovative logo", 
    "integra logo", "intel", "interactive indai", "interia logo", "interrni logo", "invecas technologies", 
    "ishan infotech","jll logo", "jp morgan", "kalyani logo", "kaplan", "kion india", "knight frank ogo", 
    "kpmg", "kraft", "kubik logo", "lam research", "larsen turbo", "legato health", "liko logo", 
    "lkarle logo", "lopex technologies", "lotus lab", "maerssk line", "marelli", "marlabs", "masco logo", 
    "mediatek", "mercedes", "micron", "microsoft", "modi v care", "modula", "moodys", "morgan stanley", 
    "mphasis", "myntra", "mysore lights logo", "nag logo", "narsi logo", "natixis global", "ncsi technologies", 
    "nestle", "nokia networks", "north star logo", "nxp india", "ocean logo", "oculus", "om sai logo", 
    "padam logo", "paragon", "paraxel", "peekay steel", "pepsico", "pm group", "polaris", "pragathi logo", 
    "pratikart logo", "prestige", "pro alum logo", "prosus", "protech logo", "rachem pharma", "razorpay", 
    "redseer", "reliance life", "rmz", "rockstar games", "rockwell collins", "rp goenka", "rsp", "rtizen lgo", 
    "safran hal", "saint logo", "samco", "sap logo", "seating logo", "sequoia capital", "service now", 
    "shaoopji pallonji", "shivani logo", "siemens", "signify innoavtions", "smart work", "rp goenka",
    "societe general", "sonata software", "space matrix", "spacetheory logo", "spigo logo", "sr logo", 
    "sumo bangalore", "swasthik logo", "swbi", "swiss re", "synopsys", "talin logo", "target indi", 
    "tata reality", "tech mahindra", "techno logo", "technostar", "tesco", "teva pharma", "th", 
    "thomson reuters", "thought works", "trendence", "true beacon", "uber", "uniglaze logo", 
    "urban eat logo", "vaibhav logo", "verizon", "vestian logo", "viashnavi", "visa", "viterra", 
    "vm ware", "volvo", "we nwork", "welco", "wells fargo", "wesco", "windor logo", "wipro", "workspace", "zee"
];


// --- Helper function to convert name to a filename ---
const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, ' '); // Keep single spaces
};

// --- Sort names alphabetically and generate paths from the name ---
const clientLogos = clientNames
  .sort((a, b) => a.localeCompare(b))
  .map(name => ({
    baseSrc: `/logos2/${generateSlug(name)}`,
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
              Our Esteemed Partnerships
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
                <h2 className="text-3xl md:text-4xl font-serif font-bold">Our Esteemed End Users</h2>
            </motion.div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-x-8 gap-y-12 items-center justify-center">
              {clientLogos.map((logo, index) => (
                <div
                  key={index}
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

