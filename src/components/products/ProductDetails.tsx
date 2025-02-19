import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "@/redux/store";
import { Product as ProductType } from "@/redux/cartSlice";
import { addToCart } from "@/redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) =>
    state.product.product.find((item: ProductType) => item.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return <div className="text-center text-xl text-red-500 mt-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("🛒 Added to cart", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6 flex flex-col md:flex-row items-center">
        <img
          className="w-full md:w-1/2 object-cover rounded-lg shadow-md"
          src={product.image}
          alt={product.title}
        />
        <div className="md:ml-8 mt-6 md:mt-0 dark:text-white text-gray-800">
          <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{product.title}</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
          <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">
            <span className="text-gray-500 dark:text-gray-400">Category:</span> {product.category}
          </p>
          <p className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Price: <span className="text-red-500">Rs {product.price * 100}</span>
          </p>
          <p className="text-gray-800 dark:text-gray-200 font-semibold mb-4">
            ⭐ {product.rating.rate} / 5 ({product.rating.count} reviews)
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ProductDetails;
