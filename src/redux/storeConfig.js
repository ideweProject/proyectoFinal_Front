import barsReducer from "./barsSlice";
import juicesReducer from "./juicesSlice";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    juices: juicesReducer,
    bars: barsReducer,
    user: userReducer,
    login: loginReducer,
  },
});

export default store;
