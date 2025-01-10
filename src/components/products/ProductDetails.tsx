import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "@/redux/store";
import { Product as ProductType } from "@/redux/cartSlice"; // Import the Product type
import { addToCart } from "@/redux/cartSlice";
import { ToastContainer,toast } from "react-toastify";

const ProductDetails: React.FC = () => {
   
  const { id } = useParams<{ id: string }>();
  const product = useSelector((state: RootState) =>
    state.product.product.find((item: ProductType) => item.id === parseInt(id))
  );
  const dispatch = useDispatch();

  if (!product) {
    return <div className="text-center mt-10">Product not found</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("🦄 Added to cart", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="container mx-auto p-4 h-[100vh]">
      <div className="flex flex-col md:flex-row items-center">
        <img
          className="w-full md:w-2/6 object-contain"
          src={product.image}
          alt={product.title}
        />
        <div className="md:ml-8 mt-4 md:mt-0 dark:text-white">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-900 font-semibold mb-4 dark:text-white">
            Category: {product.category}
          </p>
          <p className="text-gray-900 font-semibold mb-4  dark:text-white">
            Price: ${product.price}
          </p>
          <p className="text-gray-900 font-semibold mb-4 dark:text-white">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
            <ToastContainer
              position="bottom-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
