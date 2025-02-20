import React, { useEffect, useState } from 'react';
import "../../../App.css"; // Import custom CSS for animations



const Banner = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-container h-[6rem] bg-slate-200 dark:bg-white text-slate-600 px-6 py-3.5">
      <p className={`banner-message  ${showFirst ? 'banner-slide-in' : 'banner-slide-out'}`}>
        Don't miss out on our amazing summer sale! Get up to 50% off on a wide range of products.
      </p>
      <p className={`banner-message  ${showFirst ? 'banner-slide-out' : 'banner-slide-in'}`}>
        Make the most of your summer shopping.
      </p>
    </div>
  );
}

export default Banner;

