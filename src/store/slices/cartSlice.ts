import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { ICardItem } from "../../Types/ICardItem"

interface CartState {
	cartContainer: ICardItem[]
}

const initialState: CartState = {
	cartContainer: []
}

export const cartSlice = createSlice({
	name: 'cartContainer',
	initialState,
	reducers: {
		addToCart: (state, { payload: item }) => {
			state.cartContainer.push(item)
		},
		clearCart: (state) => {
			state.cartContainer = []
		},
	}
})

export const { addToCart } = cartSlice.actions
export const { clearCart } = cartSlice.actions
export const SelectCart = (state: RootState) => state.cartContainer
export default cartSlice.reducer