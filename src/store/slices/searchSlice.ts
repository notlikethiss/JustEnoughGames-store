import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface ISearchState {
	value: string
}

const initialState: ISearchState = {
	value: ''
}

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchValue: (state, action: PayloadAction<string>) => {
			state.value = action.payload
		}
	}
})

export const { setSearchValue } = searchSlice.actions

export default searchSlice.reducer