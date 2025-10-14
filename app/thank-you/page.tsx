"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ThankYouPage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#121212] text-white text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-[#c82a2b] mb-4"
      >
        Thank You!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-lg text-lg mb-8"
      >
        Your message has been successfully sent. We’ll get back to you soon.
      </motion.p>

      <Link
        href="/"
        className="bg-[#c82a2b] px-6 py-3 rounded-lg text-white font-semibold hover:bg-red-700 transition-all"
      >
        Go Back Home
      </Link>
    </section>
  );
}
