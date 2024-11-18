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
    changeSlug(state, action) {
      state.slug = action.payload.slug;
    },
  },
});

const { reducer, actions } = pagesSlice;
export const { toggleOffcanvas, changeSlug } = actions;
export default reducer;
