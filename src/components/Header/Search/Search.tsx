import React, { useEffect } from 'react'

//styles
import './search.style.scss'

//types
import { ISearch } from '../../../Types/ISearch'

const Search: React.FC<ISearch> = ({ setSearchValue, setVisibleSearch, searchValue, mobileSearch }) => {

	useEffect(() => {
		if (searchValue || mobileSearch) {
			setVisibleSearch(true)
		} else {
			setVisibleSearch(false)
		}
	})

	return (

		<div className='center'>
			<input
				type='text'
				onChange={(event) => setSearchValue(event.currentTarget.value)}
				placeholder='Поиск'
				className={!mobileSearch ? 'search' : 'search-mobile'}
			>
			</input>
		</div>

	)
}

export default Search