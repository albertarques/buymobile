import ProductDetail from "@/components/products/ProductDetail";

const fetchProduct = async (id) => {
  const res = await fetch("https://itx-frontend-test.onrender.com/api/product/" + id);
  const data = await res.json();
  return data;
};

export default async function Product({ params }) {
 
  const product = await fetchProduct(params.product)

  if(!product) return (
    <main className="flex container min-h-screen flex-col items-center relative">
      <h1 className="text-2xl">Error al mostrar los productos!</h1>
      <p>Por favor, intentelo nuevamente más tarde.</p>
    </main>
  );
        
  return (
    <main className="container">
      <ProductDetail product={product} />
    </main>
  );
}
