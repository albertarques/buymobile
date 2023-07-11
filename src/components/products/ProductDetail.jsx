import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({ product }) {
  return (
    <div className="container">
      <div className="row justify-end">
        <Link href="/" className="text-blue-500 underline ">
          Back to list
        </Link>
      </div>
      <div className="bg-white rounded-2xl p-5 my-8 mx-4 md:w-4/5 md:mx-auto md:grid md:grid-cols-2 md:gap-4">
        <div className="flex justify-center">
          <Image
            src={product.imgUrl}
            alt={product.model}
            width={300}
            height={250}
          />
        </div>
        <div>
          <p>{product.brand}</p>
          <h2 className="font-bold">{product.model}</h2>
          <p>Price: {product.price}€</p>
          <h3 className="font-bold">Description</h3>
          <p>CPU: {product.cpu}</p>
          <br />
          <p>RAM: {product.ram}</p>
          <p>Sistema Operativo: {product.os}</p>
          <p>Resolución de pantalla: {product.displayResolution}</p>
          <p>Batería: {product.battery}</p>
          <p>Cámara trasera: {product.primaryCamera}</p>
          <p>Cámara frontal: {product.secondaryCamera}</p>
          <p>Dimensiones: {product.dimentions}</p>
          <p>Peso: {product.weight} grs.</p>
          <button>Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}
