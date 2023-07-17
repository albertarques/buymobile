import ProductsList from "@/components/products/ProductsList";
import Link from "next/link";

const fetchProducts = async () => {
  try {
    const res = await fetch(
      "https://itx-frontend-test.onrender.com/api/product",
      { next: { revalidate: 3600 } }
    );
    const data = await res.json();
    return data;  
  } catch (error) {
    console.log(error);  }
};

export default async function Home() {
  const products = await fetchProducts();

  if(!products) return (
    <main className="flex container min-h-screen flex-col items-center relative">
      <h1 className="text-2xl">Error al mostrar los productos!</h1>
      <p>Por favor, intentelo nuevamente más tarde.</p>
    </main>
  );

  return (
    <main className="flex container min-h-screen flex-col items-center relative">
      <ProductsList products={products} />
    </main>
  );
}
