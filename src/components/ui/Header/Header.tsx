import React from "react";
import MainHeader from "./mainHeaader";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-100 tracking-tight text-black px-[1.8rem] py-[0.2rem] font-medium">
      <div className="">
        <img
          src="./images/image.png"
          className=" object-contain w-[1.5rem] h-[1.5rem] rounded-full"
          alt=""
        />
      </div>
      <div className=" ">
        <ul className="inline-flex ">
          <li >
            Find a Store <span className="mx-[1.1rem]">|</span>{" "}
          </li>
          <li>
            Help <span className="mx-[1.1rem]">|</span>
          </li>
          <li>
            Join Us <span className="mx-[1.1rem]">|</span>
          </li>
          <li>Sign In</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
