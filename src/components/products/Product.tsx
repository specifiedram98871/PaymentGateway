import { setProduct } from "@/redux/productSlice";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const Product = () => {
  const product = useSelector((state) => state.product.product);
  const [visibleProduct, setVisibleProduct] = useState(product.slice(0, 3));
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(setProduct(data));
        console.log(product);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" flex flex-col items-center justify-center">
    <div className=" w-[80%] grid grid-cols-1  md:grid-cols-3  gap-5">
      {visibleProduct.map((item) => (
        <div
          className="max-w-sm mx-auto bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"
          key={item.id}
        >
          <img
            className="object-contain h-56 w-96  "
            src={item.image}
            alt={item.category}
          />

          <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white h-28 mt-4">
            {item.title}
          </p>
          <div className="flex justify-between items-center p-6">
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to cart
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <span>Rs.{item.price * 100}</span>
            </button>
          </div>
        </div>
      ))}
      </div>
      <div className=" flex justify-center items-center gap-4 bg-blue-300 ">
        {visibleProduct.length < product.length && (
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded "
            onClick={() =>
              setVisibleProduct(product.slice(0, visibleProduct.length + 4))
            }
          >
            Show more
          </button>
        )}
        {visibleProduct.length > 3 && (
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              setVisibleProduct(product.slice(0, visibleProduct.length - 4))
            }
          >
            Show less
          </button>
        )}
      </div>
      aalu
    </div>
  );
};

export default Product;
