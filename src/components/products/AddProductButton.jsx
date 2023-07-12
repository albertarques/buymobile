"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import AddToLocalStorageKey from "../service/AddToLocalStorageKey";

export default function AddProductButton({ product }) {

  const { setCartContext } = useContext(CartContext);

  function handlerAddToCart(product) {

    const color = document.getElementById("color").value;
    const storage = document.getElementById("storage").value;
  
    const productValues = {
      id: product.id,
      color: color,
      storage: storage,
    };
  
    AddToLocalStorageKey("cart", productValues)
    setCartContext({cart: JSON.parse(localStorage.getItem("cart"))})
    return localStorage.getItem("cart")
  }
  
  if (product.price != "" && product.price != "0" && product.price != null) {
    return (
      <button
        className="bg-blue-500 rounded-xl px-4 py-2 text-white my-4"
        onClick={() => handlerAddToCart(product)}
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
