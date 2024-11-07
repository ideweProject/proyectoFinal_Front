import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    saveBars(state, action) {
      // state = action.payload.User;

      return state;
    },
  },
});

const { reducer, actions } = userSlice;
export const { saveUser } = actions;
export default reducer;
