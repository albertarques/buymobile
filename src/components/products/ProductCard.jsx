import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`${product.id}?model=${product.model}`}
      className="bg-white rounded-2xl shadow hover:bg-slate-200"
    >
      <div className="p-3  flex-nowrap md:mx-2">
        <Image
          src={product.imgUrl}
          alt={product.model}
          width={256}
          height={256}
          className="w-64 h-64 object-contain mx-auto"
        />
        <p className="text-xl">{product.brand}</p>
        <h2 className="text-xl font-bold">{product.model}</h2>
        <p className="text-xl">{product.price ? "PVP:" + product.price + "€": "No disponible"}</p>
      </div>
    </Link>
  );
}
