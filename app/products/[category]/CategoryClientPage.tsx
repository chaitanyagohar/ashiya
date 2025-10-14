"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Define a type for a single category's data, which will be passed as a prop
type CategoryData = {
  name: string;
  products: { name: string; imageUrl: string }[];
};

// Define the props for our new client component
type CategoryClientPageProps = {
  category: CategoryData;
};

export default function CategoryClientPage({ category }: CategoryClientPageProps) {
  // All your JSX and interactive logic goes here.
  // This is the entire 'return' block from your original page.tsx.
  return (
    <div className="bg-[#111111] text-white">
      <main>
        {/* --- Hero Section --- */}
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

        {/* --- Products Grid Section --- */}
        <section className="pb-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {category.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
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
}