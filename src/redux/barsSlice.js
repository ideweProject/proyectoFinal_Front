import { createSlice } from "@reduxjs/toolkit";

const barsSlice = createSlice({
  name: "bars",
  initialState: [],
  reducers: {
    saveBars(state, action) {
      state = action.payload.bars;

      return state;
    },
  },
});

const { reducer, actions } = barsSlice;
export const { saveBars } = actions;
export default reducer;
