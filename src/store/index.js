import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from "../reducers/carrinhoSlice";
import abreCarrinhoSlice from "../reducers/abreCarrinhoSlice";
import { restaurantsApi } from "../api/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    abreCarrinho: abreCarrinhoSlice,
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(restaurantsApi.middleware)
});

 setupListeners(store.dispatch)