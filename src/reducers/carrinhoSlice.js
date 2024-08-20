import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addItem(state, action) {
      state.find((item) => item.id === action.payload.id)
        ? alert('Item já adicionado ao carrinho.')
        : state.push(action.payload)
    },
    removeItem(state, action) {
      return state.filter((item) => item.id !== action.payload)
    },
    resetCart(state) {
      return []
    },
  },
})
export const { addItem, removeItem, resetCart } = carrinhoSlice.actions

export default carrinhoSlice.reducer
