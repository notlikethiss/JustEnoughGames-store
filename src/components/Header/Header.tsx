import React, { useState } from 'react'

//components
import Logo from './Logo/Logo'
import ActionPanel from './ActionPanel/ActionPanel'
import Search from './Search/Search'
import Cart from '../Cart/Cart'

//styles
import './header.style.scss'
import HandleSearch from './Search/HandleSearch'

const Header:React.FC = () => {

  const [visibleSearch, setVisibleSearch] = useState<boolean>(false)
  const [visibleCart, setVisibleCart] = useState<boolean>(false)

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
			<ActionPanel visibleCart={visibleCart} setVisibleCart={setVisibleCart}/>
			
		</div>

		<HandleSearch 
			setVisibleSearch={setVisibleSearch}
			setSearchValue={setSearchValue} 
			visibleSearch={visibleSearch}
			searchValue={searchValue}
		/>
		<Cart 
			setVisibleCart={setVisibleCart}
			visibleCart={visibleCart}
		/>

		{ visibleCart || visibleSearch ? <div className='overlay'/> : null }

	</header>
	
  )
}

export default Header