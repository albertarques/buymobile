import Image from "next/image";
import ProductDetail from "@/components/products/ProductDetail";

const fetchProduct = async (id) => {
  const res = await fetch("https://itx-frontend-test.onrender.com/api/product/" + id);
  const data = await res.json();
  return data;
};

export default async function Product({ params }) {

  console.log(params)
  const product = await fetchProduct(params.product)

  return (
    <main className="flex container flex-col relative">
      <ProductDetail product={product} />
    </main>
  );
}
