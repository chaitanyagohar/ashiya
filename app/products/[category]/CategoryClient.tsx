// app/products/[category]/CategoryClient.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface CategoryClientProps {
  category: { name: string; products: { name: string; imageUrl: string }[] } | null;
}

export default function CategoryClient({ category }: CategoryClientProps) {
  if (!category) {
    return (
      <div className="bg-[#111111] text-white min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif font-bold animate-fadeIn">
          Category Not Found
        </h1>
        <p className="mt-4 text-gray-300 animate-fadeIn delay-200">
          The product category you&apos;re looking for does not exist.
        </p>
        <Link href="/products">
          <button className="mt-8 bg-[#c82a2b] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 animate-fadeIn delay-400">
            Back to Products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#111111] text-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 text-center">
        <div className="container mx-auto px-4">
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 animate-fadeIn">
            Products
          </p>
          <h1 className="text-4xl md:text-7xl font-serif font-bold leading-tight animate-slideIn">
            {category.name}
          </h1>
        </div>
      </section>

      {/* Products Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {category.products.map((product, i) => (
              <div key={i} className={`group overflow-hidden mb-4 rounded-sm animate-slideUp delay-${i * 100}`}>
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-full object-contain aspect-[3/2] transition-transform duration-500 group-hover:scale-105"
                />
                <h3 className="text-sm text-gray-400 uppercase tracking-widest font-semibold text-center mt-4 animate-fadeIn delay-200">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] py-32">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6 animate-slideIn">
            Explore Other Categories
          </h2>
          <p className="text-gray-300 text-lg mb-10 animate-fadeIn delay-200">
            Discover our full range of premium architectural solutions.
          </p>
          <Link href="/products">
            <button className="bg-[#c82a2b] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 animate-fadeIn delay-400">
              View All Products
            </button>
          </Link>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        .animate-fadeIn { opacity:0; animation: fadeIn 0.8s forwards; }
        .animate-slideIn { opacity:0; transform:translateY(20px); animation: slideIn 0.8s forwards; }
        .animate-slideUp { opacity:0; transform:translateY(30px); animation: slideUp 0.7s forwards; }
        .delay-200 { animation-delay:0.2s; }
        .delay-400 { animation-delay:0.4s; }
        @keyframes fadeIn { to { opacity:1; } }
        @keyframes slideIn { to { opacity:1; transform:translateY(0); } }
        @keyframes slideUp { to { opacity:1; transform:translateY(0); } }
      `}</style>
    </div>
  );
}
