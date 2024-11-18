import { createSlice } from "@reduxjs/toolkit";

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    showCart: false,
  },
  reducers: {
    toggleOffcanvas: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

const { reducer, actions } = pagesSlice;
export const { toggleOffcanvas } = actions;
export default reducer;
