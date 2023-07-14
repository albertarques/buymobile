'use client'

export default function ProductsSearchBar({ filteredProducts, setFilteredProducts, products}) {
  return (
    <div className="container px-4 flex flex-col md:flex-row my-2 justify-end">
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
          const keyword = e.target.value;
          if (keyword !== "" && filteredProducts.length > 0) {
            const results = filteredProducts.filter((filteredProducts) => {
              return (
                filteredProducts.model
                  .toLowerCase()
                  .includes(keyword.toLowerCase()) ||
                filteredProducts.brand
                  .toLowerCase()
                  .includes(keyword.toLowerCase())
              );
            });
            setFilteredProducts(results);
          } else {
            setFilteredProducts(products);
          }
        }}
      />
    </div>
  );
}
