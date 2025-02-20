import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/Store";
import { removeFromCart } from "@/redux/cartSlice";
import { Product} from "@/redux/productSlice";
import { useNavigate } from "react-router-dom";
import PriceSidebar from "./PriceSidebar";

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
//   const data = [{
//     order_id: "test13",
//     cartItems: items
// }]
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(items);
  // console.log("data",data);
  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="container md:w-3/4 mx-auto p-4 translate-y-[10rem] ">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Your Shopping Cart
      </h1>
      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded-lg mr-4"
              />
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Rs{item.price * 100} x {item.quantity}
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300 mr-4"
                onClick={() => handleRemoveFromCart(item)}
              >
                Remove
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                Select
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-end gap-6 items-center">
        <h2 className="text-2xl font-bold ">Total: Rs{total}</h2>
        <button
          onClick={() => {
            navigate("/process/payment");
          }}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Checkout
        </button>
      </div>
      <div className="w-full flex justify-center">

      <PriceSidebar cartItems={items} />
      </div>
    </div>
  );
};

export default Cart;
