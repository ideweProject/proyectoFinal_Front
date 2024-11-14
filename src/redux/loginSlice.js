import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {
    saveUserData(state, action) {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
    },
    logOut(state, action) {
      state.token = "";
      state.userId = "";
    },
  },
});

const { reducer, actions } = loginSlice;
export const { saveUserData, logOut } = actions;
export default reducer;
