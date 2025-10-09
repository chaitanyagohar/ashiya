"use client";
import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const heroTextRef = useRef(null);

  useEffect(() => {
    // GSAP text animation
    gsap.from(heroTextRef.current.children, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.2,
      delay: 0.5,
    });
  }, []);

  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }} // A nice ease for scale
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop"
          alt="Modern architecture"
          layout="fill"
          objectFit="cover"
          priority // Prioritize loading of the hero image
        />
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Overlay for text readability */}
      </motion.div>

      <div className="z-10 text-center text-white" ref={heroTextRef}>
        <h2 className="text-4xl md:text-6xl font-bold max-w-4xl">
          We are an architectural firm based in Wellington.
        </h2>
      </div>
    </section>
  );
}