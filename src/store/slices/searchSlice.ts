import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

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
			
		}
	}
})