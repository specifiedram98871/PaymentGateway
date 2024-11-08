import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
interface cartItems extends Product {
    quantity: number;
}

interface CartState {
    items: cartItems[];
    total: number;
}
const initialState: CartState = {
    items: [],
    total: 0,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart:(state, action:PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.total += action.payload.price*100;
        },
        removeFromCart:(state, action:PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
                state.total -= action.payload.price*100;
            }
        },
    }

})
export const{addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer