import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../../../App.css";
import Slider from '@/components/menu/slider/Slider';
const Searchbar = () => {
  const cart = useSelector((state: any) => state.cart.items);
  const[show ,setShow]=useState(false); 
  return (
    <div className=" flex items-center justify-end  gap-2">
      <div className="bg-slate-200 rounded-full flex justify-center items-center hover:bg-slate-400 text-slate-700 ">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="p-3 relative  text-xl rounded-full bg-white"/>
        <input
          className=" hidden lg:block showText outline-none bg-transparent p-3 rounded-r-full "
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className=' flex items-center'>
        <Link to="/cart" className="p-2 hover:bg-orange-300 rounded-full">
          <FontAwesomeIcon className=' h-5 w-5 rounded-full p-1' icon={faBagShopping} />
          <span className='font-bold  relative top-[-10px] right-0'>{cart.length}</span>
        </Link>
      </div>
      <div className='' onClick={()=>{setShow(!show)}}>
        <FontAwesomeIcon className="dark:text-white  text-2xl top-[-10px] hover:text-orange-500" icon={faBars} />
      </div>
      <div onClick={()=>{setShow(!show)}} className={`${show?"translate-x-[0%]":" translate-x-[100%]"} w-1/2 absolute min-h-screen top-[-0px] right-0 bg-white  transform transition ease-in-out duration-500 ` }><Slider/> </div>
    </div>
  );
}

export default Searchbar