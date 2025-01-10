import { Link } from "react-router-dom";
import React from "react";

const demoProducts = [
  {
    id: 1,
    title: "Product with Aesthetic Design",
    price: 100,
    description: "Product with aesthetic design",
    category: "Men's Clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Made in Nepal T-shirt",
    price: 150,
    description: "Made with pure 100% natural material",
    category: "Men's Clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 3,
    title: "High Speed SSD",
    price: 200,
    description: "High Speed SSD",
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];

// const List = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "Product",
//     path: "/product",
//   },
// ];

const Home = () => {
  return (
    <>
      <div className="flex flex-col sm:flex- justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
          {demoProducts.map((item) => (
            <div
              className="mt-10 p-4 border rounded-lg flex flex-col justify-center items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl "
              key={item.id}
            >
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-center mb-4 text-gray-800">
                {item.title}
              </h3>
              <div className="w-full flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-[15rem] lg:w-[20rem] p-4 rounded-lg"
                />
              </div>
              <div className="dark:text-white flex flex-col justify-center items-center text-center">
                <p className="bg-gray-200 text-lg sm:text-xl lg:text-2xl font-semibold p-2 rounded-lg mb-2">
                  ${item.price}
                </p>
                <p className="text-gray-700 mb-2">{item.description}</p>
                <p className="text-gray-500 mb-2">{item.category}</p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-yellow-500 font-bold">
                    {item.rating.rate}
                  </p>
                  <p className="text-gray-500">({item.rating.count} reviews)</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-6 p-4">
          <Link to="/product">
            <button className="bg-blue-500 p-4 hover:bg-sky-600 text-white font-bold text-xl  rounded transition-transform transform hover:scale-105">
              Load More Products...
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
