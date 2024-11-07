import { createSlice } from "@reduxjs/toolkit";

const juicesSlice = createSlice({
  name: "juices",
  initialState: [],
  reducers: {
    saveJuices(state, action) {
      state = action.payload.juices;

      return state;
    },
  },
});

const { reducer, actions } = juicesSlice;
export const { saveJuices } = actions;
export default reducer;
