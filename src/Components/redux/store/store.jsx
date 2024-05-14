import { configureStore } from "@reduxjs/toolkit";
import Authslice from "../reducers/authReducer";
import { LoginRequest } from "../Services/authServices.jsx";
import { setupListeners } from "@reduxjs/toolkit/query";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: Authslice,
  [LoginRequest.reducerPath]: LoginRequest.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(LoginRequest.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
