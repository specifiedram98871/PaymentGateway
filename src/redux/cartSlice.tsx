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


const loadState = (): CartState => {
    try {
        const serializedState = localStorage.getItem('cart');
        if (serializedState === null) {
            return { items: [], total: 0 };
        }
        return JSON.parse(serializedState);
    } catch (err) {
        console.log(err);
        return { items: [], total: 0 };
    }
}

    const saveState = (state: CartState) => {
        try {
            const serializedState = JSON.stringify(state);
            localStorage.setItem('cart', serializedState);
        } catch (err) {
            console.log(err);
        }
}

const initialState:CartState= loadState();

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
            state.total += action.payload.price * 100;
            saveState(state);
        },
        removeFromCart:(state, action:PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1;
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload.id);
                }
                state.total -= action.payload.price * 100;
                saveState(state);
            }
        },
    }

})
export const{addToCart, removeFromCart} = cartSlice.actions
export default cartSlice.reducer