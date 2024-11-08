import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/Store";
import { removeFromCart } from "@/redux/cartSlice";
import {  Product as ProductType } from "@/redux/cartSlice";

const Cart: React.FC = () => {
  const items = useSelector((state: RootState) => state.cart.items);
  const total = useSelector((state: RootState) => state.cart.total);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product: ProductType) => {
    dispatch(removeFromCart(product));
  };

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.title} - Rs{item.price*100} x {item.quantity}
            <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total: Rs{total.toFixed(2)}</h2>
      
    </div>
  );
};

export default Cart;
