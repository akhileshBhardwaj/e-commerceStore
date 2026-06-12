import React from "react";
import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import { useCart } from "../context/CartContext";
import ProductCart from "../components/ProductCart";

const ProductList = () => {
  const { products } = useCart();

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <SearchFilter />
        <CategoryFilter />

        <h1 className="text-xl font-extrabold mx-auto px-4 md:px-6 py-3  ">Featured Gear ({products.length} items)</h1>

        <div className="grid grid-cols sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center ">
            {
                products.map((product, index)=>( <ProductCart key={index} product={product} /> ))
            }
        </div>

      </div>
    </>
  );
};

export default ProductList;
