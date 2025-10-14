"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// --- Reusable Info Card ---
const InfoCard = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    className="flex items-start space-x-4"
  >
    <div className="text-[#c82a2b] mt-1">{icon}</div>
    <div>
      <h3 className="font-bold text-lg">{title}</h3>
      <div className="text-gray-400">{children}</div>
    </div>
  </motion.div>
);

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  // --- Handle Submit ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        window.location.href = "/thank-you";
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#111111] text-white">
      <main>
        {/* --- Hero Section --- */}
        <section className="pt-40 pb-20 text-center">
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-7xl font-serif font-bold leading-tight"
            >
              Let&apos;s Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-3xl mx-auto mt-4 text-gray-300"
            >
              Have a project in mind or just want to say hello? We’d love to hear from you.
            </motion.p>
          </div>
        </section>

        {/* --- Main Content Section --- */}
        <section className="pb-32">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              {/* Left Column: Contact Details */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.2 }}
                className="space-y-12"
              >
                <h2 className="text-3xl font-serif font-bold">Contact Information</h2>
                <InfoCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                  title="Our Office"
                >
                  <p>
                    No 2, Opp to Muniswara Temple, Banjara Layout, Hormavu Agara Main
                    Road, Kalkere Bengaluru -560043
                  </p>
                </InfoCard>
                <InfoCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                  title="Email Us"
                >
                  <a
                    href="mailto:Accounts@ashiya.co.in"
                    className="hover:text-[#c82a2b] transition-colors"
                  >
                    Accounts@ashiya.co.in
                  </a>
                </InfoCard>
                <InfoCard
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                  title="Call Us"
                >
                  <p>+91 9632353101</p>
                </InfoCard>
              </motion.div>

              {/* Right Column: Contact Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="bg-[#1a1a1a] p-8 rounded-lg space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded bg-[#111111] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c82a2b] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 rounded bg-[#111111] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c82a2b] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full p-3 rounded bg-[#111111] border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-[#c82a2b] transition-colors"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded bg-[#c82a2b] text-white font-semibold transition-transform duration-300 hover:scale-105 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
