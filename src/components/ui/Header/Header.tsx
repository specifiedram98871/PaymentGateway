import React from "react";
import MainHeader from "./mainHeaader";
import { ModeToggle } from "@/components/mode-toggle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const user = useSelector((state) => state.user.user);
  console.log("user", user);
  return (
    <div className="">
      <div className="fixed right-2 z-50 ">
        <ModeToggle />
      </div>
      <div className=" px-14 hidden lg:flex justify-between items-center dark:bg-slate-700 dark:text-white bg-slate-100 tracking-tight text-black py-2 font-medium">
        <div>
          <Link to="/">
            <img
              src="./images/image.png"
              className="object-contain w-6 h-6 rounded-full"
              alt="profile"
            />
          </Link>
        </div>
        <div className="">
          <ul className="inline-flex space-x-4">
            <li className="hover:text-blue-500">
              Find a Store <span className="mx-2">|</span>
            </li>
            <li className="hover:text-blue-500">
              Help <span className="mx-2">|</span>
            </li>
            <li className="hover:text-blue-500">
              Join Us <span className="mx-2">|</span>
            </li>
            {!user && (
              <Link to="/signin" className="hover:text-blue-500">
                <li>Sign In</li>
              </Link>
            )}
            {user && (
              <Link to="/profile" className="hover:text-blue-500">
                <li>{user.username}</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
      <MainHeader />
    </div>
  );
};

export default Header;
