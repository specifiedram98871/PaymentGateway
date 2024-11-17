import React, { useState } from "react";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Men's Clothing",
    submenu: ["T-shirts", "Casual shirts", "Formal shirts", "Sweatshirts"],
  },
  {
    id: 2,
    name: "Jewelery",
    submenu: ["Necklaces", "Earrings", "Rings", "Bracelets"],
  },
  {
    id: 3,
    name: "Electronics",
    submenu: ["Laptops", "Smartphones", "Tablets", "Cameras"],
  },
  {
    id: 4,
    name: "Women's clothing",
    submenu: ["Dresses", "T-shirts", "Skirts", "Jeans"],
  },
];

const MainHeader = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div className="grid grid-cols-3 justify-between items-center">
      <div className="px-4 py-2">
        <img
          src="./images/image.png"
          className="rounded-full h-[3.2rem]"
          alt="profile"
        />
      </div>
      <div className="flex justify-center items-center gap-4 w-full">
        {categories.map((item) => (
          <ul
            key={item.id}
            className="py-4"
            onMouseEnter={() => setActiveCategory(item.id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <Link to={`/category/${item.name}`}>
              <li className="hover:underline cursor-pointer py-4">
                {item.name}
              </li>
            </Link>
            <div
              className={`absolute z-10  left-0 w-full bg-slate-300 dark:bg-slate-800 shadow-lg transition-transform duration-300 ease-in-out transform ${
                activeCategory === item.id
                  ? "translate-y-4 opacity-100"
                  : "-translate-y-0 opacity-0"
              }`}
            >
              {activeCategory === item.id && (
                <ul className="flex justify-center py-4 w-full">
                  {item.submenu.map((subitem, index) => (
                    <Link key={index} to={`/category/${subitem}`}>
                      <li className="hover:underline p-2">{subitem}</li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          </ul>
        ))}
      </div>
      <div>
        <Searchbar />
      </div>
    </div>
  );
};

export default MainHeader;
