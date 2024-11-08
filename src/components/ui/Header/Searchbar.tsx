import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux';
import { Link } from 'lucide-react';
const Searchbar = () => {
  const cart = useSelector((state: any) => state.cart.items);
  console.log(cart.length)
  return (
    <div className="flex items-end justify-end px-4 gap-2">
      <div className="bg-slate-200 rounded-full p-2">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="pr-3 text-slate-700" />
        <input
          className="outline-none bg-transparent"
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className='p-2 flex items-center hover:bg-slate-300 rounded-full '>
        
          <FontAwesomeIcon className=' h-5 w-5 rounded-full P-1' icon={faBagShopping} />
          <span className='font-bold relative top-[-10px] right-0'>{cart.length}</span>
        
      </div>
    </div>
  );
}

export default Searchbar