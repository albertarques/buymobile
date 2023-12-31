'use client'

import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {

  const {cartContext, setCartContext} = useContext(CartContext)

  useEffect(() => {
    if (localStorage.getItem("cart") != null) {
      setCartContext({cart: JSON.parse(localStorage.getItem("cart"))})
    }
  }, [])

  return (
    <div className="bg-white rounded-3xl flex h-12 p-1 m-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 m-1 ml-2 text-black"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
      <p className="bg-red-500 rounded-3xl py-1 my-auto h-10 w-10 text-center inline align-middle">
        {cartContext.cart != null ? cartContext.cart.length : "0"}
      </p>
    </div>
  );
}
