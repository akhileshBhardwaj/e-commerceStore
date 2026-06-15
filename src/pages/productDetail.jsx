import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/Product";
import { ChevronLeft, Tag, Zap, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();
  const { addToCart } = useCart();

  useEffect(() => {
    setProduct(initialProducts.find((data) => data.id == id));
  }, [id]);
  console.log("myPrduct:", product);

  return (
    <>
      <div className="container mx-auto px-4 md:px-8  bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800  ">
        <Link to={"/"}>
          <button className="flex items-center text-gray-400 hover:text-orange-400  transition duration-200 mb-12 font-semibold text-lg">
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to all Products</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 ">
          <div className="w-full  ">
            <img
              src={product?.image}
              alt={product?.image}
              className="w-[400px] h-[400px] object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border-gray-800  "
            />
          </div>

          <div className="felx flex-col justify-between ">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight ">
                {product?.name}
              </h1>
            </div>
            <p className="text-2xl font-extrabold text-orange-400 mb-4 ">
              {product?.price.toFixed(2)}
            </p>
            <h2 className="text-xl font-bold text-gray-200 mb-2 border-b border-e-orange-900/50">
              <Tag className="w-5 h-5 text-orange-500 " />{" "}
              <span className="">Product Overview</span>
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed mb-3">
              {product?.description}
            </p>

            <ul className="space-y-3 text-gray-300 p-4 bg-gray-800 rounded-xl border border-gray-700 ">
              <li className="flex items-center space-x-3 text-lg ">
                <Zap className="w-5 h-5 text-orange-500 " />
                <span className="">
                  High-Quality Professional Frade Metarials
                </span>
              </li>
              <li className="flex items-center space-x-3 text-lg ">
                <Zap className="w-5 h-5 text-orange-500 " />
                <span className="">
                  High-Quality Professional Frade Metarials
                </span>
              </li>
              <li className="flex items-center space-x-3 text-lg ">
                <Zap className="w-5 h-5 text-orange-500 " />
                <span className="">
                  High-Quality Professional Frade Metarials
                </span>
              </li>
            </ul>

            <div className="mt-5 space-y-4 justify-center items-center flex-col">
              <button
                onClick={() => addToCart(product)}
                className="flex items-center justify-center space-x-2  transform hover:ring-4 mx-auto w-full py-3 bg-orange-600 text-white font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300  "
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart </span>
              </button>

              <Link
                to={"/"}
                className="flex items-center justify-center space-x-2  transform hover:ring-4 mx-auto w-full py-3 bg-white border-2  text-orange-400 font-bold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300  "
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
