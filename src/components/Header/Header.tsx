import React, { useState } from 'react'

//components
import Logo from './Logo/Logo'
import ActionPanel from './ActionPanel/ActionPanel'
import Search from './Search/Search'
import SearchBox from './Search/SearchBox'

//styles
import './header.style.scss'

const Header:React.FC = () => {

  const [visibleSearch, setVisibleSearch] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  return (
	<header className='header'>
		<div className='internal-header'>
			<Logo />
			<Search 
				setVisibleSearch={setVisibleSearch} 
				searchValue={searchValue} 
				setSearchValue={setSearchValue}
			/>
			<ActionPanel />
		</div>
		{ 
			visibleSearch
			? 
			<SearchBox 
				searchValue={searchValue} 
				setSearchValue={setSearchValue} 
				setVisibleSearch={setVisibleSearch}/> 
			: 
			null 
		}
	</header>
	
  )
}

export default Header