import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="bg-white rounded-2xl shadow hover:bg-slate-200"
    >
      <div className="p-3  flex-nowrap md:mx-2">
        <img
          src={product.imgUrl}
          alt={product.model}
          className="w-64 h-64 object-contain mx-auto"
        />
        <p className="text-xl">{product.brand}</p>
        <h2 className="text-xl font-bold">{product.model}</h2>
        <p className="text-xl">{product.price ? "PVP:" + product.price + "€": "No disponible"}</p>
      </div>
    </Link>
  );
}
