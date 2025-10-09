// app/components/Footer.tsx
"use client";

import React from 'react';

const Footer = () => {

  // Handler for the smooth scroll-to-top functionality
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent the default link behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This is what makes the scrolling smooth
    });
  };

  return (
    <footer className="bg-black text-white px-8 py-16">
      <div className="container mx-auto px-4">
        {/* Top section with 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-sm">
          
          {/* Column 1: Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-wider mb-6">ASHIYA</h3>
            <nav>
              <ul className="space-y-3">
                <li><a href="./" className="hover:text-gray-400 transition-colors">HOME</a></li>
                <li><a href="/about" className="hover:text-gray-400 transition-colors">ABOUT US</a></li>
                <li><a href="/services" className="hover:text-gray-400 transition-colors">SERVICES</a></li>
                <li>
                  <a href="/products" className="flex items-center hover:text-gray-400 transition-colors">
                    <span>PRODUCTS</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                {/* <li><a href="/clientele" className="hover:text-gray-400 transition-colors">CLIENTILE</a></li> */}
                <li><a href="/contact" className="hover:text-gray-400 transition-colors">CONTACT US</a></li>
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
              <a href="mailto:accounts@ashiya.com" className="hover:underline text-gray-300">
                accounts@ashiya.com
              </a>
            </div>
          </div>
          
          {/* Column 3: Inquiries */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-400 tracking-wider mb-6">INQUIRIES</h4>
            <p className="text-gray-300">Looking for a quote?</p>
            <a
              href="/get-a-quote"
              className="group inline-flex items-center justify-center px-8 py-3 font-bold text-white bg-orange-600 rounded-full hover:bg-orange-950 transition-all duration-300"
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
            </a>
          </div>
          
        </div>
        
        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <a href="/privacy-policy" className="hover:text-gray-300 transition-colors mb-2 md:mb-0">Privacy Policy</a>
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