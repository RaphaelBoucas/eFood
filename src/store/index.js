import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "../reducers/carrinhoSlice";

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
  },
});

