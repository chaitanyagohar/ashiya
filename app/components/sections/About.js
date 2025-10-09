"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function About() {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="container mx-auto px-4 py-24 text-center"
    >
      <p className="max-w-3xl mx-auto text-lg md:text-xl">
        We believe that architecture is a powerful tool that can be used to create beautiful, functional, and sustainable spaces that improve people&apos;s lives.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {/* You can also add stagger effects here if you want */}
        <div className="h-80 relative">
          <Image src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop" alt="House interior" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="h-80 relative">
          <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop" alt="Modern house exterior" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
        <div className="h-80 relative">
          <Image src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1974&auto=format&fit=crop" alt="Luxury home" layout="fill" objectFit="cover" className="rounded-lg" />
        </div>
      </div>
    </motion.section>
  );
}