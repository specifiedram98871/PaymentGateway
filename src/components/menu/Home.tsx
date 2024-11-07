import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "@/redux/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  // const [item,setItem] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(setProduct(data));
        // setItem(data);
        // console.log(product)
        console.log(product[0].title);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 ">
      {product.map((item) => (
        <div
          className="max-w-sm   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          key={item.id}
        >
          <a href="#">
            <img
              className="rounded-t-lg object-contain h-56 w-96"
              src={item.image}
              alt={item.category}
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {item.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <span>price:</span> ${item.price}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
