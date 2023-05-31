import React from 'react'

import Search from './Search'
import SearchBox from './SearchBox'
import { ISearch } from '../../../Types/ISearch'

const MobileSearch:React.FC<ISearch> = ({ searchValue, setSearchValue, setVisibleSearch }) => {

  return (

	<div className='mobile-search'>
		<Search 
				setVisibleSearch={setVisibleSearch} 
				searchValue={searchValue} 
				setSearchValue={setSearchValue}
				mobile={true}
		/>	
		<SearchBox 
				searchValue={searchValue} 
				setSearchValue={setSearchValue} 
				setVisibleSearch={setVisibleSearch}
				mobile={true}
		/>
	</div>

  )
}

export default MobileSearch