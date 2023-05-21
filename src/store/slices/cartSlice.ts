import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

const initialState:any = []

export const cartSlice = createSlice({
	name: 'Cart',
	initialState,
	reducers: {
		addToCart: (state, { payload: item }) => {
			state.push(item)
		},
	}
})

export const { addToCart } = cartSlice.actions

export const SelectCart = (state: RootState) => state.Cart.value

export default cartSlice.reducer