import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
     totalQuantity: 0,
     totalPrice: 0,
  },

  reducers: {
    addToCart(state, action) {
      console.log(action.payload);
      const newItem = action.payload;
      const existingitem = state.items.find((item) => item.id === newItem.id);

      if (existingitem) {
        existingitem.quantity += 1;
        existingitem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          image: "",
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addToCart } = actions;
export default reducer;
