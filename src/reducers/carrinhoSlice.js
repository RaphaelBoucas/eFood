import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const carrinhoSlice = createSlice({
    name :'carrinho',
    initialState,
    reducers: {
        addItem(state, action) {
            state.push(action.payload)
        },
        removeItem(state, action) {
           return state.filter(item => item.id !== action.payload);
           
        }
    }
})
export const { addItem, removeItem } = carrinhoSlice.actions

export default carrinhoSlice.reducer