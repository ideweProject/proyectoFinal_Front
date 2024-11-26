import { createSlice } from "@reduxjs/toolkit";
const loginSlice = createSlice({
  name: "modal",
  initialState: {
    showModal: true,
  },
  reducers: {
    showCredentials: (action, state) => {
      state.showModal = false;
      return state.showModal;
    },
  },
});

const { reducer, actions } = loginSlice;
export const { showCredentials } = actions;
export default reducer;
