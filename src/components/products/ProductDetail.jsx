import Image from "next/image";
import Link from "next/link";
import AddProductButton from "./AddProductButton";
import SelectOption from "../SelectOption";

export default function ProductDetail({product}) {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-2xl p-5 my-8 mx-4 md:w-4/5 md:mx-auto md:grid md:grid-cols-2 md:gap-4">
        <Link href="/" className="inline-block h-fit col-span-2 w-full row underline ">
          <button className="rounded-xl bg-red-500 text-white px-3 py-2">
            Back to list
          </button>
        </Link>
          <Image
            className="mx-auto"
            src={product.imgUrl}
            alt={product.model}
            width={300}
            height={250}
          />
        <div>
          <p>{product.brand}</p>
          <h2 className="font-bold">{product.model}</h2>
          <p>Price: {product.price}€</p>
          <br />
          <h3 className="font-bold">Description</h3>
          <p>CPU: {product.cpu}</p>
          <p>RAM: {product.ram}</p>
          <p>Sistema Operativo: {product.os}</p>
          <p>Resolución de pantalla: {product.displayResolution}</p>
          <p>Batería: {product.battery}</p>
          <p>Cámara trasera: {product.primaryCamera}</p>
          <p>Cámara frontal: {product.secondaryCamera}</p>
          <p>Dimensiones: {product.dimentions}</p>
          <p>Peso: {product.weight} grs.</p>
          <br />
          <h3 className="font-bold">Options</h3>
          <div className="md:mr-4">
            <SelectOption options={product.options.colors} label={"Color:"} id={"color"} />
            <SelectOption options={product.options.storages} label={"Storage:"} id={"storage"}/>
          </div>
          <AddProductButton product={product} />
        </div>
      </div>
    </div>
  );
}
