import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    saveBars(state, action) {
      // state = action.payload.User;

      return state;
    },

    saveUserInfo(state, action) {
      const { adress, city, postalCode } = action.payload;
      state.adress = adress;
      state.city = city;
      state.postalCode = postalCode;
    },
  },
});

const { reducer, actions } = userSlice;
export const { saveBars, saveUserInfo } = actions;
export default reducer;
