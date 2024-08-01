import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const carrinhoSlice = createSlice({
    name :'carrinho',
    initialState,
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
        }
    }
})
export const { addItem } = carrinhoSlice.actions

export default carrinhoSlice.reducer