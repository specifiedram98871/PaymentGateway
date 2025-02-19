import React, { useEffect, useState } from "react";
import { categories } from "@/components/ui/header/Categories";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Slider = ({ showSidebar, setShowSidebar }) => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
      if (currentWidth > 1000 && showSidebar) {
        setShowSidebar(false); // Ensures sidebar is hidden when width exceeds 1000px
      }
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, [showSidebar, setShowSidebar, currentWidth]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full  backdrop-blur-lg shadow-lg dark:bg-gray-900/80 transition-transform duration-300 ease-in-out ${
        showSidebar ? "translate-x-0" : "-translate-x-0"
      }`}
    >
      {/* Close Button */}
      <button
        className="absolute top-5 right-5 text-white text-2xl hover:text-red-500 transition duration-200"
        onClick={() => setShowSidebar(false)}
      >
        <FontAwesomeIcon icon={faX} />
      </button>

      {/* Categories Section */}
      <div className="mt-16 px-6">
        {categories.map((category) => (
          <div
            className="flex items-center justify-between py-3 px-4 hover:bg-white/10 rounded-lg transition"
            key={category.id}
          >
            <h2 className="text-xl font-semibold text-white">{category.name}</h2>
            <Link to={`/category/${category.name}`} className="text-gray-300 hover:text-gray-100 transition">
            <FontAwesomeIcon
              className="text-gray-300 hover:text-gray-100 transition"
              icon={faArrowRight}
              onClick={() => setShowSidebar(false)}
            />
            </Link>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-10 px-6 text-white">
        <p className="text-sm opacity-80">
          Discover a variety of categories tailored just for you. Browse and
          explore more!
        </p>
        <img
          src="/images/image.png"
          className="mt-4 w-full rounded-lg shadow-md"
          alt="Descriptive slider"
        />
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex flex-col gap-3 px-6">
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium rounded-full py-2 transition-shadow shadow-md hover:shadow-lg">
          Join Us
        </button>
        <button className="w-full bg-gray-700 hover:bg-gray-800 text-white text-lg font-medium rounded-full py-2 transition-shadow shadow-md hover:shadow-lg">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Slider;
