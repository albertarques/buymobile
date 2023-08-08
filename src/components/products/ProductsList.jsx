"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductsSearchBar from "./ProductsSearchBar";

export default function ProductsList({ products }) {

  const [searchTerm, setSearchTerm] = useState("");

  const productList = products.filter((product) => {
    return (
      product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  if(!productList.length) {
    return (
      <>
        <ProductsSearchBar setSearchTerm={setSearchTerm} />
        <div className="container px-4 h-full py-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-center">No se encontraron resultados</h1>
            <p className="text-xl text-center">Intenta con otra búsqueda</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ProductsSearchBar setSearchTerm={setSearchTerm} />
      <div className="container px-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 h-full py-10">
        {productList.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
