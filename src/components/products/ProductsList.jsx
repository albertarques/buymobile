"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductsSearchBar from "./ProductsSearchBar";

export default function ProductsList({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);

  if (filteredProducts.length === 0) {
    return (
      <>
        <ProductsSearchBar
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          products={products}/>
        <div className="container p-4 mx-auto h-full">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl font-bold text-center">
              No hemos encontrado este producto!
            </h2>
            <p className="text-xl text-center">
              Intentalo con un nombre de producto distinto.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <ProductsSearchBar
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        products={products}
      />
      <div className="container px-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 h-full py-10">
        {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}
