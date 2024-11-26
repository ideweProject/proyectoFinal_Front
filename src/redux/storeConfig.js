import barsReducer from "./barsSlice";
import juicesReducer from "./juicesSlice";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";
import cartReducer from "./cartSlice";
import pagesReducer from "./pagesSlice";
import modalReducer from "./modalSlice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  juices: juicesReducer,
  bars: barsReducer,
  user: userReducer,
  login: loginReducer,
  cart: cartReducer,
  pages: pagesReducer,
  modal: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
