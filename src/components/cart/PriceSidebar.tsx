import React from 'react';
const PriceSidebar = ({ cartItems=[] }) => {
    console.log("cartItems", cartItems);
    return (
        <div className="flex sticky top-16 mt-16  flex-col md:w-5/6 sm:px-1">
 
            {/* <!-- nav tiles --> */}
            <div className="flex flex-col bg-white rounded-sm shadow">
                <h1 className="px-6 py-3 border-b font-medium text-gray-500">PRICE DETAILS</h1>
                <div className="flex flex-col gap-4 p-6 pb-3 dark:bg-gray-800">
                    {cartItems.map((item) => (
                        <p key={item} className="flex justify-between">
                            <img src={item.image} alt="" srcset="" className='w-14 h-14' />
                            <span>{item.title}</span>
                            </p>
                    ))}
                    <p className="flex justify-between">Price ({cartItems.length} item) <span>Rs.{cartItems.reduce((total, item)=>total+ (item.quantity*item.price*100), 0).toLocaleString()}</span></p>
                    
                    <p className="flex justify-between">Delivery Charges <span className="text-primary-green">FREE</span></p>

                    <div className="border border-dashed"></div>
                    <p className="flex justify-between text-lg font-medium">Total Amount <span>Rs.{cartItems.reduce(( total,item) => total + (item.price * item.quantity*100),0).toLocaleString()}</span></p>
                    <div className="border border-dashed dark:border-gray-400"></div>

                    <p className="font-medium text-primary-green dark:text-pr">You will save Rs.0 on this order</p>

                </div>

            </div>
            {/* <!-- nav tiles --> */}

        </div>
    );
};

export default PriceSidebar;
