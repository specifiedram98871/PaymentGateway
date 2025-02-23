import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  return (
    <>
      <div className='w-[20%] min-h-screen bg-slate-200 '>
        <div className='absolute w-10 h-10 bg-orange-500 left-[20%] text-center'>
        <FontAwesomeIcon className=' my-auto h-full' icon={faBars} />
        </div>
        <div className='flex items-center justify-between p-4 bg-orange-400 '>
          <div className='rounded-full w-12 h-12 bg-black' >
          <img src="/public/images/image.png" alt="image" />
          </div>
           <div className='flex flex-col'>
            <p>Name</p>
            <p>Email</p>
           </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar