import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

const initialState:any = []

export const cartSlice = createSlice({
	name: 'cartFluid',
	initialState,
	reducers: {
		addToCart: (state, { payload: item }) => {
			state.push(item)
		},
	}
})

export const { addToCart } = cartSlice.actions

export const SelectCart = (state: RootState) => state.cartFluid.value

export default cartSlice.reducer