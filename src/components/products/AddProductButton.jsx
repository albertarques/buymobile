"use client";

function handlerAddProductToLocalstorage(product) {
  const color = document.getElementById("color").value;
  const storage = document.getElementById("storage").value;

  const productExcerp = {
    id: product.id,
    color: color,
    storage: storage,
  };
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let productInCart = cart.find((p) => p.id === product.id);
  cart.push(productExcerp);
  localStorage.setItem("cart", JSON.stringify(cart));
}

export default function AddProductButton({ product }) {
  if (product.price != "" && product.price != "0" && product.price != null) {
    return (
      <button
        className="bg-blue-500 rounded-xl px-4 py-2 text-white my-4"
        onClick={() => handlerAddProductToLocalstorage(product)}
      >
        Añadir al carrito
      </button>
    );
  } else {
    return (
      <button
        className="bg-red-500 rounded-xl px-4 py-2 text-white my-4"
        disabled>
        No disponible
      </button>
    );
  }
}
