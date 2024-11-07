import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBagShopping } from '@fortawesome/free-solid-svg-icons'
const Searchbar = () => {
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
      <div className='p-2 hover:bg-slate-300 rounded-full'>
        <FontAwesomeIcon className=' h-5 w-6 rounded-full' icon={faBagShopping} />
      </div>
    </div>
  );
}

export default Searchbar