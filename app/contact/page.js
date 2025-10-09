"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center">
      <section className="container mx-auto px-4 py-32">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm font-semibold tracking-widest uppercase mb-3"
            style={{ color: "#c09a74" }}
          >
            Get in Touch
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4"
          >
            Contact Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind? We’d love to hear from you. Let&apos;s create something extraordinary together.
          </motion.p>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl mx-auto bg-[#111111] p-8 rounded-2xl shadow-xl border border-gray-800"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c09a74] transition-all"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c09a74] transition-all"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Write your message here..."
              className="w-full p-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c09a74] transition-all"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 rounded-lg font-semibold tracking-wide bg-[#c09a74] text-black hover:bg-[#d9b38c] transition-colors"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>
    </main>
  );
}
