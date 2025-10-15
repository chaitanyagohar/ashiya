"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// --- Product Data ---
const productsData: Record<
  string,
  { name: string; products: { name: string; imageUrl: string }[] }
> = {
  "door-hardware": {
    name: "Door Hardware",
    products: [
      { name: "MULTIPLE LOCKS", imageUrl: "/doorlock1.avif" },
      { name: "PULL HANDLES", imageUrl: "/doorlock2.avif" },
      { name: "SEALS", imageUrl: "/doorlock3.avif" },
      { name: "PANIC HARDWARE", imageUrl: "/doorlock4.avif" },
      { name: "LOCKS", imageUrl: "/doorlock5.avif" },
      { name: "Hinges", imageUrl: "/doorlock6.avif" },
      { name: "Lever Handles", imageUrl: "/doorlock7.avif" },
      { name: "Floor Spring", imageUrl: "/doorlock8.avif" },
      { name: "Door Closure", imageUrl: "/doorlock9.avif" },
      { name: "Accessories", imageUrl: "/doorlock10.avif" },
    ],
  },
  "entrance-systems": {
    name: "Entrance Systems",
    products: [
      { name: "Revolving Door", imageUrl: "/ED1.avif" },
      { name: "FOLDING SLIDING DOOR", imageUrl: "/ED2.avif" },
      { name: "AUTO SWING DOOR", imageUrl: "/ED3.avif" },
      { name: "SPECIAL DOOR", imageUrl: "/ED4.avif" },
      { name: "AUTO SLIDING DOOR", imageUrl: "/ED5.avif" },
      { name: "AUTO SLIDING OPERATORS", imageUrl: "/ED6.avif" },
    ],
  },
  "interior-glass-systems": {
    name: "Interior Glass Systems",
    products: [
      { name: "SHOWER SYSTEMS", imageUrl: "/IG1.avif" },
      { name: "MANUAL SLIDING SYSTEM FOR GLASS & TIMBER DOOR", imageUrl: "/IG2.avif" },
      { name: "ROOM PARTITIONING SYSTEMS", imageUrl: "/IG3.avif" },
      { name: "DEMOUNTABLE OFFICE PARTITION", imageUrl: "/IG4.avif" },
      { name: "INTERNAL GLASS DOOR FITTING", imageUrl: "/IG5.avif" },
      { name: "FITTINGS FOR TOUGHENED GLASS ASSEMBLIES", imageUrl: "/IG6.avif" },
    ],
  },
  "mechanical-keys": {
    name: "Mechanical Key Systems",
    products: [
      { name: "CYLINDER LOCKS WITH SERRATED KEYS", imageUrl: "/K1.avif" },
      { name: "CYLINDER LOCKS WITH REVERSIBLE KEYS", imageUrl: "/K2.avif" },
      { name: "MASTER KEY SYSTEM PLANNING & MAINTENANCE", imageUrl: "/K3.avif" },
    ],
  },
  "electronic-access-control": {
    name: "Electronic Access & Control",
    products: [
      {
        name: "ACCESS CONTROL SYSTEM FOR MICROENTERPRISES & RESIDENTIALS",
        imageUrl: "/A1.avif",
      },
      {
        name: "ACCESS CONTROL SOLUTIONS FOR CORPORATES",
        imageUrl: "/A2.avif",
      },
      { name: "ACCESS MEDIA & BADGES", imageUrl: "/A3.avif" },
    ],
  },
  "movable-walls": {
    name: "Movable Walls",
    products: [
      { name: "SKY FOLD", imageUrl: "/W1.avif" },
      { name: "GEZE MOVABLE WALL", imageUrl: "/W2.avif" },
    ],
  },
};

// --- Props Interface ---
interface CategoryPageProps {
  params: { category: string };
}

// --- Component ---
const CategoryPage: React.FC<CategoryPageProps> = ({ params }) => {
  const [category, setCategory] = useState(productsData[params.category]);

  // Optional: handle missing category dynamically
  useEffect(() => {
    setCategory(productsData[params.category]);
  }, [params.category]);

  if (!category) {
    return (
      <div className="bg-[#111111] text-white min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif font-bold">Category Not Found</h1>
        <p className="mt-4 text-gray-300">
          The product category you&apos;re looking for does not exist.
        </p>
        <Link href="/products">
          <button className="mt-8 bg-[#c82a2b] text-white px-8 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105">
            Back to Products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] text-white">
      <main>
        {/* --- Hero --- */}
        <section className="pt-40 pb-20 text-center">
          <div className="container mx-auto px-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4"
            >
              Products
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl md:text-7xl font-serif font-bold leading-tight"
            >
              {category.name}
            </motion.h1>
          </div>
        </section>

        {/* --- Products grid --- */}
        <section className="pb-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {category.products.map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="group"
                >
                  <div className="overflow-hidden mb-4 rounded-sm">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-contain aspect-[3/2] transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm text-gray-400 uppercase tracking-widest font-semibold text-center">
                    {product.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="bg-[#1a1a1a] py-32">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
                Explore Other Categories
              </h2>
              <p className="text-gray-300 text-lg mb-10">
                Discover our full range of premium architectural solutions.
              </p>
              <Link href="/products">
                <button className="bg-[#c82a2b] text-white px-10 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105">
                  View All Products
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CategoryPage;
