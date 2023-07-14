import Image from "next/image";
import AddProductButton from "./AddProductButton";
import SelectOption from "../SelectOption";
import LinkAsButton from "../UI/LinkAsButton";

export default function ProductDetail({product}) {
  return (
    <div className="container mx-auto px-4">
      <div className="bg-white rounded-2xl p-5 my-8 mx-4 md:w-4/5 md:mx-auto md:grid md:grid-cols-2 md:gap-4">
          <Image
            className="mx-auto"
            src={product.imgUrl}
            alt={product.model}
            width={300}
            height={250}
          />
        <div>
          <p className="text-xl">{product.brand}</p>
          <h2 className="text-2xl font-bold">{product.model}</h2>
          <p className="text-xl">Precio: {product.price}€</p>
          <br />
          <h3 className="font-bold">Características:</h3>
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
          <h3 className="font-bold">Opciones</h3>
          <div className="md:mr-4">
            <SelectOption options={product.options.colors} label={"Color:"} id={"color"} />
            <SelectOption options={product.options.storages} label={"Almacenamiento:"} id={"storage"}/>
          </div>
          <AddProductButton product={product} />
          <LinkAsButton text="Volver a la lista" route="/" bgColor="orange" textColor="white"/>
        </div>
      </div>
    </div>
  )
}
