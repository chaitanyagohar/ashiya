"use client";

import React from 'react';
import Link from 'next/link'; // Use Link for internal navigation

const Footer = () => {
  // Handler for the smooth scroll-to-top functionality
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        {/* Top section with 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm">
          
          {/* Column 1: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-3xl font-serif font-bold tracking-wider mb-6">ASHIYA</h3>
            <nav>
              <ul className="space-y-3">
                <li><Link href="/" className="hover:text-gray-400 transition-colors">HOME</Link></li>
                <li><Link href="/about" className="hover:text-gray-400 transition-colors">ABOUT US</Link></li>
                <li><Link href="/service" className="hover:text-gray-400 transition-colors">SERVICES</Link></li>
                <li><Link href="/products" className="hover:text-gray-400 transition-colors">PRODUCTS</Link></li>
                <li><Link href="/contact" className="hover:text-gray-400 transition-colors">CONTACT US</Link></li>
              </ul>
            </nav>
          </div>
          
          {/* Column 2: Head Office */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-400 tracking-wider mb-6">HEAD OFFICE</h4>
            <p className="text-gray-300 leading-relaxed">
              No 2, Opp to Muniswara Temple, Banjara Layout, Hormavu Agara Main Road, Kalkere Bengaluru -560043
            </p>
            <div>
              <p className="text-gray-300">+91 9900935101</p>
              <a href="mailto:accounts@ashiya.com" className="hover:text-[#c82a2b] transition-colors">
                accounts@ashiya.com
              </a>
            </div>
          </div>
          
          {/* Column 3: Inquiries */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-400 tracking-wider mb-6">INQUIRIES</h4>
            <p className="text-gray-300">Looking for a quote?</p>
            <Link href="/contact" passHref>
              <button
                className="group inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-[#c82a2b] rounded-full hover:bg-red-700 transition-all duration-300"
              >
                <span>GET A QUOTE</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:rotate-[-45deg]"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor" 
                  strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
          
        </div>
        
        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors mb-2 md:mb-0">Privacy Policy</Link>
          <a 
            href="#"
            onClick={handleScrollToTop}
            className="cursor-pointer hover:text-gray-300 transition-colors mb-2 md:mb-0"
          >
            Back to Top
          </a>
          <p>&copy; 2025 by ASHIYA GROUP.</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
