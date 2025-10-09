// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This function will override the problematic header
  async headers() {
    return [
      {
        // This targets all requests to the Next.js Image Optimizer
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Content-Disposition',
            // This tells the browser to display the image, not download it
            value: 'inline', 
          },
        ],
      },
    ];
  },

  // Your existing configuration for allowing Unsplash images
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;