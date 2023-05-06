import React, { useState } from 'react'

//components
import Menu from '../Menu/Menu'
import Logo from './Logo/Logo'
import ActionPanel from './ActionPanel/ActionPanel'
import Search from './Search/Search'

//styles
import './header.style.scss'

const Header:React.FC = () => {

  const [visible, setVisible] = useState(false)

  return (
	<header className='header'>
		
		<div className='internal-header'>
			<Logo visible={visible} setVisible={setVisible}/>
			<Search />
			<ActionPanel />
		</div>

		{ visible ? <Menu /> : null }
		
	</header>
	
  )
}

export default Header