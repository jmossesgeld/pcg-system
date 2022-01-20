import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const slice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addToCart, removeFromCart } = slice.actions;
export default slice.reducer;
