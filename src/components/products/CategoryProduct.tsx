import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "@/redux/Store";
import { Product as ProductType } from "@/redux/cartSlice";
import { addToCart } from "@/redux/cartSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";

const CategoryProduct: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) =>
    state.product.product.filter(
      (item: ProductType) =>
        item.category.toLowerCase() === name?.toLocaleLowerCase()
    )
  );

  const handleCart = (item: ProductType) => {
    dispatch(addToCart(item));
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center mt-36">
      <h1 className="text-3xl font-bold mb-8 text-center capitalize">
        {name} Products
      </h1>
      <div className="w-[80%] grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((item: ProductType) => (
          <div
            key={item.id}
            className="max-w-lg hover:scale-[1.05] transform transition ease-in-out duration-300 p-4 border-sky-100 border-2 flex flex-col mx-auto bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 text-center"
          >
            <Link to={`/product/${item.id}`}>
              <img
                className="object-contain w-full h-[28rem] rounded-t-lg"
                src={item.image}
                alt={item.category}
              />
            </Link>
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white p-4 mt-4">
              {item.title}
            </h2>
            <p className="font-normal line-clamp-2 text-gray-700 dark:text-gray-400 overflow-hidden">
              {item.description}
            </p>
            <div className="flex flex-col md:flex-row justify-between  items-center sm:mt-4 gap-6">
              <button
                onClick={() => handleCart(item)}
                className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-7 w-full md:w-[20%] rounded"
              >
               <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <span>Rs.{item.price * 100}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
