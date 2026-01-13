import { configureStore } from "@reduxjs/toolkit";
import unitReducer from "../slices/unitslice";
import favoriteReducer from "../slices/favoriteslice";

export const store = configureStore({
  reducer: {
    unit: unitReducer,
    favorite: favoriteReducer
  }
});
