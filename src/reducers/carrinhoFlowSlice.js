import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  displayCart: false,
  fillDeliveryForm: false,
  showAddressForm: true,
  showPaymentForm: false,
}

export const carrinhoFlowSlice = createSlice({
  name: 'carrinhoFlow',
  initialState,
  reducers: {
    showCart(state) {
      state.displayCart = true
    },
    closeCart(state) {
      state.displayCart = false
    },
    showDeliveryForm(state, action) {
      state.fillDeliveryForm = action.payload
    },
    showAddressForm(state, action) {
      state.showAddressForm = action.payload
    },
    showPaymentForm(state, action) {
      state.showPaymentForm = action.payload
    },
  },
})

export const { showCart, closeCart, showDeliveryForm, showPaymentForm } =
  carrinhoFlowSlice.actions

export default carrinhoFlowSlice.reducer
