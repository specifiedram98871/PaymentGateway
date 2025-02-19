import { Link } from "react-router-dom";
import React from "react";
import { CarouselDemo } from "./carousel/Carousel";
import { demoProducts } from "./slider/DemoProduct";
import Banner from "./slider/Banner";

const Home = () => {
  return (
    <>
      <div className="flex flex-col sm:flex justify-center items-center min-h-screen">
        <div className=" top-36 relative w-[100%] h-[20vh] bg-transparent">
          <Banner />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-h-[100%] my-auto gap-6 ">
          {demoProducts.map((item) => (
            <div
              className="mt-10 p-4 border rounded-lg flex flex-col justify-center items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl "
              key={item.id}
            >
              <h3 className="font-bold text-white text-xl sm:text-2xl lg:text-3xl text-center mb-4 text-gray-800">
                {item.title}
              </h3>
              <div className="">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-[15rem] min-h-[20rem] h-[25rem] object-cover  lg:w-[20rem] p- rounded-lg"
                />
              </div>
              <div className="dark:text-white flex flex-col justify-center items-center text-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold p-2 rounded-lg mb-2">
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
        <CarouselDemo/>
      </div>
    </>
  );
};

export default Home;
