import React from "react";
import MainHeader from "./mainHeaader";
import { ModeToggle } from "@/components/mode-toggle";

const Header = () => {
  return (
    <div>
      <div className="fixed top-24 right-6">
    < ModeToggle />
    </div>
    <div className="flex justify-between items-center dark:bg-slate-700 dark:text-white bg-slate-100 tracking-tight text-black px-[1.8rem] py-[0.2rem] font-medium">
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
      <MainHeader />
      </div>
  );
};

export default Header;
