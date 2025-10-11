"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Products", href: "/products" },
   { name: "Clientile", href: "/clientile" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  if (!mounted) return null; // ✅ fixes hydration errors

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="nameofbusiness logo"
            width={120}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative transition-colors hover:text-black ${
                  isActive ? "text-black" : "text-gray-500"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 block h-[2px] w-full "
                     style={{ backgroundColor: "#c82a2b" }} 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <Link
          href="/contact"
          className="hidden md:inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          let&apos;s talk
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          className="md:hidden relative w-8 h-5 flex flex-col justify-between items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-8 h-[2px] bg-black rounded origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="block w-8 h-[2px] bg-black rounded"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="block w-8 h-[2px] bg-black rounded origin-center"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl"
          >
            <div className="flex flex-col items-center py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`text-lg transition-colors hover:text-black ${
                      isActive ? "text-black font-semibold" : "text-gray-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
              >
                let&apos;s talk
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
