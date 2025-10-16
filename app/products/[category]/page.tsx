// app/products/[category]/page.tsx
import CategoryClient from "./CategoryClient";

// --- Products Data ---
const productsData: Record<
  string,
  { name: string; products: { name: string; imageUrl: string }[] }
> = {
  "door-hardware": {
    name: "Door Hardware",
    products: [
      { name: "MULTIPLE LOCKS", imageUrl: "/doorlock1.avif" },
      { name: "PULL HANDLES", imageUrl: "/doorlock2.avif" },
      { name: "SEALS", imageUrl: "/doorlock3.avif" },
      { name: "PANIC HARDWARE", imageUrl: "/doorlock4.avif" },
      { name: "LOCKS", imageUrl: "/doorlock5.avif" },
      { name: "Hinges", imageUrl: "/doorlock6.avif" },
      { name: "Lever Handles", imageUrl: "/doorlock7.avif" },
      { name: "Floor Spring", imageUrl: "/doorlock8.avif" },
      { name: "Door Closure", imageUrl: "/doorlock9.avif" },
      { name: "Accessories", imageUrl: "/doorlock10.avif" },
    ],
  },
  "entrance-systems": {
    name: "Entrance Systems",
    products: [
      { name: "Revolving Door", imageUrl: "/ED1.avif" },
      { name: "FOLDING SLIDING DOOR", imageUrl: "/ED2.avif" },
      { name: "AUTO SWING DOOR", imageUrl: "/ED3.avif" },
      { name: "SPECIAL DOOR", imageUrl: "/ED4.avif" },
      { name: "AUTO SLIDING DOOR", imageUrl: "/ED5.avif" },
      { name: "AUTO SLIDING OPERATORS", imageUrl: "/ED6.avif" },
    ],
  },
  "interior-glass-systems": {
    name: "Interior Glass Systems",
    products: [
      { name: "SHOWER SYSTEMS", imageUrl: "/IG1.avif" },
      { name: "MANUAL SLIDING SYSTEM FOR GLASS & TIMBER DOOR", imageUrl: "/IG2.avif" },
      { name: "ROOM PARTITIONING SYSTEMS", imageUrl: "/IG3.avif" },
      { name: "DEMOUNTABLE OFFICE PARTITION", imageUrl: "/IG4.avif" },
      { name: "INTERNAL GLASS DOOR FITTING", imageUrl: "/IG5.avif" },
      { name: "FITTINGS FOR TOUGHENED GLASS ASSEMBLIES", imageUrl: "/IG6.avif" },
    ],
  },
  "mechanical-keys": {
    name: "Mechanical Key Systems",
    products: [
      { name: "CYLINDER LOCKS WITH SERRATED KEYS", imageUrl: "/K1.avif" },
      { name: "CYLINDER LOCKS WITH REVERSIBLE KEYS", imageUrl: "/K2.avif" },
      { name: "MASTER KEY SYSTEM PLANNING & MAINTENANCE", imageUrl: "/K3.avif" },
    ],
  },
  "electronic-access-control": {
    name: "Electronic Access & Control",
    products: [
      { name: "ACCESS CONTROL SYSTEM FOR MICROENTERPRISES & RESIDENTIALS", imageUrl: "/A1.avif" },
      { name: "ACCESS CONTROL SOLUTIONS FOR CORPORATES", imageUrl: "/A2.avif" },
      { name: "ACCESS MEDIA & BADGES", imageUrl: "/A3.avif" },
    ],
  },
  "movable-walls": {
    name: "Movable Walls",
    products: [
      { name: "SKY FOLD", imageUrl: "/W1.avif" },
      { name: "GEZE MOVABLE WALL", imageUrl: "/W2.avif" },
    ],
  },
};

// --- Properly Typed Page Props ---
interface CategoryPageProps {
  params: {
    category: string;
  };
}

// --- Generate Static Params (for Next.js 13+ App Router) ---
export async function generateStaticParams() {
  return Object.keys(productsData).map((key) => ({
    category: key,
  }));
}

// --- Page Component ---
export default function CategoryPage({ params }: CategoryPageProps) {
  const key = params.category.toLowerCase();
  const category = productsData[key] || null;

  return <CategoryClient category={category} />;
}
