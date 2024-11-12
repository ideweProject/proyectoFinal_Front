import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {
    saveToken(state, action) {
      state.token = action.payload.token;
    },
    logOut(state, action) {
      state.token = {};
    },
  },
});

const { reducer, actions } = loginSlice;
export const { saveToken, logOut } = actions;
export default reducer;
