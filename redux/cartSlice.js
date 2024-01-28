import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.value = [...state.items, action.payload];
    },
    RemoveFromCart: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { addToCart, RemoveFromCart } = cartSlice.actions;

export const selectCart = (state) => state.cartSlice.items;

export default cartSlice.reducer;
