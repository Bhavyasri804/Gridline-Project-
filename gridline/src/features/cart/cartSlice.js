import { createSlice } from "@reduxjs/toolkit";
import { getCartCount, getCartTotal } from "../../utils/cartHelpers";

const initialState = {
  items: [], // each item is a product plus a qty field
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // payload: the whole product
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },
    // payload: the product id
    removeFromCart(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // payload: { id, qty }. A qty below 1 removes the line.
    updateQuantity(state, action) {
      const { id, qty } = action.payload;
      if (qty < 1) {
        state.items = state.items.filter((item) => item.id !== id);
        return;
      }
      const item = state.items.find((line) => line.id === id);
      if (item) {
        item.qty = qty;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

// Selectors: small functions that read from the store.
export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => getCartCount(state.cart.items);
export const selectCartTotal = (state) => getCartTotal(state.cart.items);

export default cartSlice.reducer;
