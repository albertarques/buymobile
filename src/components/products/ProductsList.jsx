"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductsList({ products }) {

  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <>
      {/* TODO: Make a component with SearchBar */}
      <div className="container px-4 flex flex-col md:flex-row my-2 justify-end">
        <label 
          className="text-xl font-bold align-middle md:py-2 md:mx-2 md:align-middle md:inline-block"
          htmlFor="searchInput">
          Search:
        </label>
        <input
          id="searchInput"
          className="form-control py-2 px-4 rounded shadow md:w-max-content"
          type="text"
          placeholder="Type model name or brand..."
          onChange={(e) => {
            const keyword = e.target.value;
            if (keyword !== "") {
              const results = filteredProducts.filter((filteredProducts) => {
                return (
                  (filteredProducts.model).toLowerCase().includes(keyword.toLowerCase())
                  || (filteredProducts.brand).toLowerCase().includes(keyword.toLowerCase())
                  );
              });
              setFilteredProducts(results);
            } else {
              setFilteredProducts(products);
            }
          }}/>
      </div>
      <div className="container px-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 h-full py-10">
        {filteredProducts.map((product) => (
            <ProductCard product={product} key={product.id}/>
          ))
        }
      </div>
    </>
  );
}
