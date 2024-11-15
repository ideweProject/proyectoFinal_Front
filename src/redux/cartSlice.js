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
          image: newItem.image,
          totalPrice: newItem.price,
        });
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },

    removeFromCart(state, action) {
      const { id } = action.payload;
      const existingitem = state.items.find((item) => item.id === id);
      state.totalPrice =
        state.totalPrice - existingitem.price * existingitem.quantity;
      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
    },

    plusOneItem(state, action) {
      const newItem = action.payload;
      const existingitem = state.items.find((item) => item.id === newItem.id);

      if (existingitem) {
        existingitem.quantity += 1;
        existingitem.totalPrice += newItem.price;
      }

      state.totalQuantity += 1;
      state.totalPrice += newItem.price;
    },

    minusOneItem(state, action) {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
        if (existingItem.quantity === 0) {
          state.items = state.items.filter((item) => item.id !== id);
        }
        state.totalQuantity -= 1;
        state.totalPrice -= existingItem.price;
      }
    },
  },
});

const { reducer, actions } = cartSlice;
export const { addToCart, removeFromCart, minusOneItem, plusOneItem } = actions;
export default reducer;
