import { Link } from "react-router-dom";
import React from "react";
import { CarouselSize } from "./carousel/Carousel";
import { demoProducts } from "./slider/DemoProduct";
import Banner from "./slider/Banner";

const Home = () => {
  return (
    <>
      <div className="flex flex-col sm:flex item ">
        
        <div className=" top-36 relative w-[100%] h-[24vh] mb-12 bg-transparent hidden sm:block">
          <Banner />
        </div>
        <Link to={"/product"} className="text-4xl top-14 md:top-[-10px] block pt-8 font-bold relative left-[10%] max-w-[20%] text-orange-800 dark:text-white">
          New Arrivals
        </Link>
        <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 lg:grid-cols-3 min-h-[100%] my-auto gap-8 ">
          {demoProducts.map((item) => (
            <Link to={`/product/${item.id}`}
              className="mt-14 p-4 border min-w-[15rem] rounded-lg flex flex-col justify-center items-center shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl "
              key={item.id}
            >
              <h3 className=" text-xl sm:text-2xl lg:text-2xl text-center mb-4 dark:text-slate-200">
                {item.title}
              </h3>
              <div className="">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-[15rem] min-h-[20rem] h-[25rem] object-cover  lg:w-[20rem] rounded-lg"
                />
              </div>
              <div className="dark:text-white flex flex-col justify-center items-center text-center">
                <p className="text-lg sm:text-xl lg:text-2xl font-semibold p-2 rounded-lg mb-2">
                  ${item.price}
                </p>
                <p className="text-gray-200 mb-2">{item.description}</p>
                <p className=" mb-2">{item.category}</p>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-yellow-500 font-bold">
                    {item.rating.rate}
                  </p>
                  <p className="text-gray-500">({item.rating.count} reviews)</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <CarouselSize/>
      </div>
    </>
  );
};

export default Home;
