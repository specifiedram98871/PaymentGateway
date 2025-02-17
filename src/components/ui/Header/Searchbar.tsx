import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../../../App.css";
const Searchbar = () => {
  const cart = useSelector((state: any) => state.cart.items);
  return (
    <div className=" flex items-end justify-end px-4 gap-2">
      <div className="bg-slate-200 rounded-full flex justify-center items-center hover:bg-slate-400 text-slate-700 ">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="p-3 relative  text-xl rounded-full bg-white"/>
        <input
          className=" hidden lg:block showText outline-none bg-transparent p-2 rounded-r-full "
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className='p-2 flex items-center hover:bg-slate-300 rounded-full'>
        <Link to="/cart">
          <FontAwesomeIcon className=' h-5 w-5 rounded-full P-1' icon={faBagShopping} />
          <span className='font-bold relative top-[-10px] right-0'>{cart.length}</span>
        </Link>
        
      </div>
    </div>
  );
}

export default Searchbar