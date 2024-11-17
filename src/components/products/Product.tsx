import { setProduct } from "@/redux/productSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";
import { Product as ProductType } from "@/redux/cartSlice"; // Import the Product type
import { items as itemsType } from "@/redux/cartSlice";
import { Link } from "react-router-dom";

const Product: React.FC = () => {
  const products = useSelector((state: ProductType) => state.product.product);
  const cartItems = useSelector((state:itemsType) => state.cart.items);
  const [visibleProduct, setVisibleProduct] = useState(4);
  const dispatch = useDispatch();

  const handleCart = (item: ProductType) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(setProduct(data));
        // console.log("sdsdsdsds", products);
      } catch (error) {
        console.log(error);
        console.log("cartItems", cartItems);
      }
    };
    fetchData();
  }, [dispatch, cartItems]);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-5">
        {products.slice(0, visibleProduct).map((item: ProductType) => (
          <div
            className="max-w-sm mx-auto bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"
            key={item.id}
          >
            <Link to={`/product/${item.id}`}>
            <img
              className="object-contain h-56 w-96"
              src={item.image}
              alt={item.category}
              />
            </Link>
            <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-28 mt-4">
              {item.title}
            </p>
            <div className="flex justify-between items-center p-6">
              <button
                onClick={() => handleCart(item)}
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add to cart
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <span>Rs.{item.price * 100}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-4">
        {visibleProduct < products.length && (
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded"
            onClick={() => setVisibleProduct((prev) => prev + 4)}
          >
            Show more
          </button>
        )}
        {visibleProduct > 4 && (
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setVisibleProduct((prev) => prev - 4)}
          >
            Show less
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
