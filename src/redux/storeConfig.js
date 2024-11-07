import barsReducer from "./barsSlice";
import juicesReducer from "./juicesSlice";
import userReducer from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: { juices: juicesReducer, bars: barsReducer, user: userReducer },
});

export default store;
