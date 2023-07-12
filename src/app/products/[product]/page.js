import ProductDetail from "@/components/products/ProductDetail";
import Link from "next/link";

const fetchProduct = async (id) => {
  const res = await fetch("https://itx-frontend-test.onrender.com/api/product/" + id);
  const data = await res.json();
  return data;
};

export default async function Product({ params }) {

  const product = await fetchProduct(params.product)

  return (
    <main className="container">
      <ul className="flex">
        <li className="after:content-['_->_']">
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </li>
        <li className="before:content-['_']">
          {product.model}
        </li>
      </ul>
      <ProductDetail product={product} />
    </main>
  );
}
