import React, { useEffect } from 'react';
import { categories } from '@/components/ui/header/Categories';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faX } from '@fortawesome/free-solid-svg-icons';
import { current } from '@reduxjs/toolkit';

const Slider = () => {
  const[currentWidth, setCurrentWidth] = React.useState(window.innerWidth);
  useEffect(() => {
    if (window.innerWidth > 1000) {
      console.log("hellohello", currentWidth);
    }
  }, [currentWidth]);

  return (
    <div className='bg-slate-500 h-[100vh] flex flex-col dark:text-white pl-12'>
      <div>
        <button className='flex items-center justify-end w-full text-2xl text-white p-2 px-4'>
          <FontAwesomeIcon onClick={() => console.log("close")} icon={faX} />
        </button>
      </div>
      
      {categories.map((category) => (
        <div className='flex items-center gap-2' key={category.id}>
          <h2 className='text-3xl p-4 font-semibold'>{category.name}</h2>
          <FontAwesomeIcon onClick={() => console.log(category.name)} icon={faArrowRight} />
        </div>
      ))}

      <div className='my-7 block w-[80%]'>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, natus laudantium dolor quaerat aliquam nostrum iusto fuga magni.</p>
        <img src="/images/image.png" className='object-cover p-6' alt="Descriptive slider image" />
      </div>

      <div className='flex gap-2'>
        <button className='bg-slate-800 text-xl text-white rounded-full p-2 px-4'>Join Us</button>
        <button className='bg-slate-800 text-xl text-white rounded-full p-2 px-4'>Sign In</button>
      </div>
    </div>
  );
};

export default Slider;
