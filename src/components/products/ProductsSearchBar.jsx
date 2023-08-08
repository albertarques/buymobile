'use client'
import { useState } from "react";

export default function ProductsSearchBar({ setSearchTerm }) {

  return (
    <div className="container px-4 flex flex-col md:flex-row my-4 justify-end">
      <label
        className="text-xl font-bold align-middle md:py-2 md:mx-2 md:align-middle md:inline-block"
        htmlFor="searchInput"
      >
        Buscar:
      </label>
      <input
        id="searchInput"
        className="form-control py-2 px-4 rounded shadow md:w-max-content"
        type="text"
        placeholder="Type model name or brand..."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    </div>
  );
}
