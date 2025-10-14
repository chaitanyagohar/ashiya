import Link from "next/link";
import CategoryClientPage from "./CategoryClientPage"; // Import the new client component

// --- Product Data (Stays in the server component) ---
const productsData: {
  [key: string]: {
    name: string;
    products: { name: string; imageUrl: string }[];
  };
} = {
  // ... your full productsData object ...
  "door-hardware": { name: "Door Hardware", products: [ /*...*/ ] },
  "entrance-systems": { name: "Entrance Systems", products: [ /*...*/ ] },
  "interior-glass-systems": { name: "Interior Glass Systems", products: [ /*...*/ ] },
  "mechanical-keys": { name: "Mechanical Key Systems", products: [ /*...*/ ] },
  "electronic-access-control": { name: "Electronic Access & Control", products: [ /*...*/ ] },
  "movable-walls": { name: "Movable Walls", products: [ /*...*/ ] },
};

// --- Static Generation (Stays in the server component) ---
export async function generateStaticParams() {
  const categories = Object.keys(productsData);
  return categories.map((category) => ({
    category: category,
  }));
}

// --- Props Type Definition ---
type CategoryPageProps = {
  params: {
    category: string;
  };
};

// --- Main Page Component (Now a Server Component) ---
export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryData = productsData[params.category];

  // Handle the case where the category is not found
  if (!categoryData) {
    return (
      <div className="bg-[#111111] text-white min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif font-bold">Category Not Found</h1>
        <p className="mt-4 text-gray-300">
          The product category you&apos;re looking for does not exist.
        </p>
        <Link href="/products">
          <button className="mt-8 bg-[#c82a2b] text-white px-8 py-3 rounded-full font-semibold transition-transform duration-300 hover:scale-105">
            Back to Products
          </button>
        </Link>
      </div>
    );
  }

  // Render the Client Component and pass the data to it as a prop
  return <CategoryClientPage category={categoryData} />;
}