import { createSlice } from "@reduxjs/toolkit";

const initialState = false

export const abreCarrinhoSlice = createSlice({
    name :'abreCarrinho',
    initialState,
    reducers: {
        abre(state) {
            return true 
    },
        fecha(state) {
            return false 
    }

}
})

export const { abre, fecha } = abreCarrinhoSlice.actions

export default abreCarrinhoSlice.reducer