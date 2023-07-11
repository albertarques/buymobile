import Header from "@/components/UI/header/Header";
import ProductsList from "@/components/products/ProductsList";

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
    <main className="flex container min-h-screen flex-col items-center relative top-14">
      <ProductsList products={products} />
    </main>
  );
}
