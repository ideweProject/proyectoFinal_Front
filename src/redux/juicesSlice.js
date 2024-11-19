import { createSlice } from "@reduxjs/toolkit";

const juicesSlice = createSlice({
  name: "juices",
  initialState: { items: [], filter: "" },
  reducers: {
    saveJuices(state, action) {
      state.items = action.payload.items;
      return state;
    },

    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

const { reducer, actions } = juicesSlice;
export const { saveJuices, setFilter } = actions;
export default reducer;
