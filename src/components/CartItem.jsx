import React from "react";
import { useCart } from "../context/CartContext";
import { X } from "lucide-react";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQ = () => addToCart(item);
  const decreaseQ = () => removeFromCart(item.id);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-6 mb-4 bg-gray-900 border border-gray-800 rounded-xl shadow-lg hover:border-orange-600/60 transition-all duration-300">
      {/* Product Info */}
      <div className="flex items-center gap-4 flex-1 min-w-0 w-full">
        <img
          src={item.image}
          alt={item.name}
          className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-gray-700 shrink-0"
        />

        <div className="flex-1 min-w-0">
          <h3
            className="text-lg sm:text-2xl font-bold text-white truncate"
            title={item.name}
          >
            {item.name}
          </h3>

          <p className="text-orange-400 font-semibold text-base sm:text-lg">
            ₹{item.price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-4 w-full sm:w-auto shrink-0">
        {/* Quantity */}
        <div className="flex items-center border border-gray-700 rounded-full overflow-hidden">
          <button
            onClick={decreaseQ}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
          >
            -
          </button>

          <span className="px-4 text-white font-bold bg-gray-800">
            {item.quantity}
          </span>

          <button
            onClick={increaseQ}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 text-gray-300 hover:bg-gray-700 transition"
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <p className="font-bold text-orange-300 text-lg min-w-[130px] text-right">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>

        {/* Delete */}
        <button
          onClick={() => removeFromCart(item.id, true)}
          className="p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 transition shrink-0"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
