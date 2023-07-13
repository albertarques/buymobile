import ProductsList from "@/components/products/ProductsList";
import Link from "next/link";

const fetchProducts = async () => {
  const res = await fetch(
    "https://itx-frontend-test.onrender.com/api/product",
    { next: { revalidate: 3600 } }
  );
  const data = await res.json();
  return data;
};

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="flex container min-h-screen flex-col items-center relative">
      <ul className="flex p-4 w-full">
        <li>
          <Link href="/" className="text-blue-500">
            Inicio
          </Link>
        </li>
      </ul>

      <ProductsList products={products} />
    </main>
  );
}
