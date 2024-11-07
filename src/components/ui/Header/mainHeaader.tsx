import React, { useState } from "react";
import Searchbar from "./Searchbar";

const categories = [
  {
    id: 1,
    name: "Men's Clothing",
  },
  {
    id: 2,
    name: "Jewelery",
  },
  {
    id: 3,
    name: "Electronics",
  },
  {
    id: 4,
    name: "Women's clothing",
  },
];
const MainHeader = () => {
  const [menuHover, setmenuHover] = useState(false);
  return (
    <div className="h-[3.5rem] grid grid-cols-3 justify-between items-center ">
      <div className="px-4 py-2">
        <img
          src="./images/image.png"
          className="rounded-full h-[3.2rem]"
          alt=""
        />
      </div>
      <div className="flex justify-center items-center gap-4 w-full">
        {categories.map((item) => (
          <ul key={item.id}>
            <li className="hover:underline" onMouseOver={()=>setmenuHover(true)}>{item.name}</li>
          </ul>
        ))}
      </div>
      <div>
        <Searchbar />
      </div>
      {menuHover && (
        <div className="w-[100vw] bg-red-200 z-10" onMouseLeave={()=>setmenuHover(false)}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non debitis
          corporis voluptatem minus eius at sit reiciendis dicta aperiam ea.
          Error, alias ab quae voluptate ad magnam! Totam magni, facilis
          perspiciatis ex molestias quisquam? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Unde adipisci quaerat possimus
          repellendus. Qui, labore quas perferendis est nisi hic corporis
          architecto dolorem distinctio ex tenetur laborum dicta reprehenderit
          consequatur ullam, error quia ea, deserunt sequi id vitae. Doloremque
          nisi expedita aliquid rem voluptates aperiam nemo excepturi tempora
          minima minus! Reiciendis sunt numquam esse tempora voluptas.
        </div>)}
    </div>
  );
};

export default MainHeader;
