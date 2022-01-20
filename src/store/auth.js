import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoggedIn: false };

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setIsLoggedIn } = slice.actions;
export default slice.reducer;
