import barsReducer from "./barsSlice";
import juicesReducer from "./juicesSlice";
import userReducer from "./userSlice";
import loginReducer from "./loginSlice";
<<<<<<< Updated upstream
import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    juices: juicesReducer,
    bars: barsReducer,
    user: userReducer,
    login: loginReducer,
    cart: cartReducer,
  },
=======
import { combineReducers, configureStore } from "@reduxjs/toolkit";

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
import { PersistGate } from "redux-persist/integration/react";

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
>>>>>>> Stashed changes
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

// const store = configureStore({
//   reducer: {
//     juices: juicesReducer,
//     bars: barsReducer,
//     user: userReducer,
//     login: loginReducer,
//   },
// });

let persistor = persistStore(store);
module.exports = { persistor, store };
