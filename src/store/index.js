import { configureStore } from '@reduxjs/toolkit'
import carrinhoSlice from '../reducers/carrinhoSlice'
import carrinhoFlowSlice from '../reducers/carrinhoFlowSlice'
import { restaurantsApi } from '../api/api'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoSlice,
    carrinhoFlow: carrinhoFlowSlice,
    [restaurantsApi.reducerPath]: restaurantsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(restaurantsApi.middleware),
})

setupListeners(store.dispatch)
