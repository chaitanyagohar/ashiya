"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const productCategories = [
  { name: "Door Hardware", imageUrl: "/pro1.jpg" },
  { name: "Entrance Systems", imageUrl: "/pro2.jpg" },
  { name: "Interior Glass Systems", imageUrl: "/pro3.jpg" },
  { name: "Glass Cabins", imageUrl: "/pro4.jpeg" },
  { name: "Electronic Access & Control", imageUrl: "/pro5.jpeg" },
  { name: "Movable Walls", imageUrl: "/pro6.jpeg" },
];

export default function ProductsPage() {
  return (
    <main>
      <section className="container mx-auto px-4 pt-32 pb-28 text-white">
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c09a74" }}
          >
            OUR PRODUCTS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Best In Class
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl text-gray-300"
          >
            GEZE GERMANY
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="overflow-hidden mb-4 bg-gray-100">
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-auto object-contain aspect-[3/2]"
                  />
                </motion.div>
              </div>

              <h4 className="text-md font-semibold tracking-wider uppercase text-[#c09a74]">
                {category.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
