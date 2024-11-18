import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    saveUserInfo(state, action) {
      const { adress, city, postalCode } = action.payload;
      state.adress = adress;
      state.city = city;
      state.postalCode = postalCode;
    },
  },
});

const { reducer, actions } = userSlice;
export const { saveUserInfo } = actions;
export default reducer;
