import React from 'react'

import SearchBox from './SearchBox'
import { ISearch } from '../../../Types/ISearch'

const HandleSearch:React.FC<ISearch> = ({ visibleSearch, searchValue, setSearchValue, setVisibleSearch }) => {
	if(visibleSearch){
		return (
			<SearchBox 
				searchValue={searchValue} 
				setSearchValue={setSearchValue} 
				setVisibleSearch={setVisibleSearch}
			/>
		)
	} else {
		return null
	}
  }

export default HandleSearch