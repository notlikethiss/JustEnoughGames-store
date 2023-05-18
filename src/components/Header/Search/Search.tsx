import React, { useEffect } from 'react'

import './search.style.scss'

import { ISearch } from '../../../Types/ISearch'

const Search:React.FC<ISearch> = ({ setSearchValue, setVisibleSearch, searchValue }) => {

  useEffect(() => {
	if(searchValue) {
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
			className='search'
		>
		</input>
	</div>

  )
}

export default Search