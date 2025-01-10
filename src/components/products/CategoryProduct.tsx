import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { RootState } from "@/redux/Store";
import { Product as ProductType } from "@/redux/cartSlice";

const CategoryProduct: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const products = useSelector((state: RootState) =>
    state.product.product.filter(
      (item: ProductType) =>
        item.category.toLowerCase() === name?.toLocaleLowerCase()
    )
  );
  console.log("products", products);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center capitalize">
        {name} Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {products.map((item: ProductType) => (
          <div
            key={item.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4"
          >
            <Link to={`/product/${item.id}`}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </Link>
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Rs{item.price * 100}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProduct;
