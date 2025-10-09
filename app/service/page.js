"use client";

import Image from "next/image";
import { Reveal } from "../components/animations/Reveal"; // Adjust path if necessary

// A simple checkmark icon for lists
const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-black flex-shrink-0 mr-3 mt-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Updated data for the services, now including a unique image for each.
const servicesData = [
  {
    imageUrl: "/comm.avif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} > <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> </svg>
    ),
    title: "COMMERCIAL INTERIORS",
    description: "At Ashiya, we create modern, functional, and aesthetically refined commercial interiors that enhance productivity, brand identity, and user experience. Whether it’s an office, retail space, hospitality venue, or corporate environment, we blend innovation, smart space planning, and premium materials to craft spaces that inspire.",
    expertiseTitle: "Our Commercial Interior Expertise:",
    points: [
      "Office Interiors: Designing dynamic workspaces that boost efficiency, foster collaboration, and reflect your corporate culture.",
      "Retail & Showroom Design: Crafting engaging layouts that elevate the customer journey and amplify brand presence.",
      "Hospitality & F&B Spaces: Creating elegant, immersive designs for restaurants, hotels, and cafes that leave a lasting impression.",
      "Smart & Space-Saving Solutions: Integrating GEZE Germany’s automated sliding and folding partitions for versatile, intelligent spaces.",
    ],
  },
  {
    imageUrl: "/residential.avif",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} > <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001 1h3v-9a2 2 0 00-2-2H9a2 2 0 00-2 2v9h3m-6 0h6" /> </svg>
    ),
    title: "RESIDENTIAL INTERIORS",
    description: "At Ashiya, we design luxurious, comfortable, and personalized residential interiors that reflect your unique style and needs. Our expertise lies in creating beautiful, functional spaces that enhance everyday living, blending aesthetic appeal with smart design solutions.",
    expertiseTitle: "Our Residential Interior Expertise:",
    points: [
      "Luxury Living Rooms: Curating elegant designs that strike a perfect balance between sophisticated style and everyday comfort.",
      "Modern Kitchens: Engineering smart, efficient, and beautifully crafted spaces for seamless functionality and culinary inspiration.",
      "Stylish Bedrooms: Designing personalized sanctuaries intended for ultimate relaxation, peace, and rejuvenation.",
      "Innovative Space Optimization: Developing intelligent layouts that maximize available space while enhancing aesthetic appeal.",
    ],
  },
  {
    imageUrl: "/service.avif",
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} > <path d="M12 14l9-5-9-5-9 5 9 5z" /> <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" /> <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /> </svg>
    ),
    title: "CIVIL CONSTRUCTION",
    description: "At Ashiya, we specialize in high-quality civil construction, delivering residential, commercial, and industrial projects that stand the test of time. With a focus on innovation, structural integrity, and superior craftsmanship, we ensure that every project meets the highest standards of safety, durability, and functionality.",
    expertiseTitle: "Our Civil Construction Expertise:",
    points: [
        "Residential & Commercial Construction: Executing well-planned, high-quality developments from foundation to finish.",
        "Structural Engineering & Design: Applying advanced engineering principles to ensure long-lasting strength and architectural excellence.",
        "Renovation & Remodeling: Transforming existing structures into modern, efficient, and aesthetically superior spaces.",
        "Project Management & Execution: Guaranteeing seamless coordination, timely delivery, and cost-effective solutions for projects of any scale.",
    ],
  },
  {
    imageUrl: "/geze.jpeg",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} > <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /> </svg>
    ),
    title: "GEZE GERMANY DISTRIBUTION",
    description: "Ashiya is proud to be South India’s trusted distributor of GEZE Germany, offering a premium range of architectural hardware and automation solutions. Our products are designed to enhance functionality, safety, and aesthetics in both residential and commercial spaces.",
    expertiseTitle: "Our GEZE Product Range:",
    points: [
        "Door Handles, Hinges & Locks: Supplying high-quality, durable, and stylish hardware for modern architecture.",
        "Glass Fittings & Accessories: Providing elegant and secure solutions for seamless glass installations.",
        "Automated Sliding & Folding Partitions: Offering smart, space-saving solutions for versatile and dynamic interiors.",
        "Sales & After-Sales Support: Delivering dedicated service to ensure seamless integration and long-term performance.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-black pt-32 pb-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <header className="mb-20 text-center">
          <Reveal>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
              OUR SERVICES
            </p>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              We Offer a Range of Services to Meet Your Needs
            </h1>
          </Reveal>
        </header>

        {/* Services Sections */}
        <div className="space-y-24">
          {servicesData.map((service, index) => (
            <section key={index} className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Text Column */}
              <div className={index % 2 !== 0 ? "lg:order-last" : ""}>
                <Reveal>
                  {service.icon}
                  <h2 className="text-2xl font-bold uppercase tracking-wider mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                </Reveal>
                <Reveal>
                  <h3 className="text-xl font-semibold mb-4">{service.expertiseTitle}</h3>
                  <ul className="space-y-3">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <CheckIcon />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* Image Column */}
              <div className="relative h-[500px] w-full overflow-hidden shadow-lg">
                <Image
                    src={service.imageUrl}
                    alt={`${service.title} service image`}
                    fill
                    className="object-cover"
                />
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

