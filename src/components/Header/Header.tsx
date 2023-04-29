import React from 'react'
import { Link } from 'react-router-dom'

import './header.style.scss'

const Header:React.FC = () => {

  return (

	<header className='header'>
		<div className='internal-header'>
			<div className='left-side'>
				<img className='menu-button' alt='menu' src='https://media.discordapp.net/attachments/888505536457367552/1101959347120111647/icons8-menu-100.png'></img>
				<h1 className='logo-font'>Just Enough Games</h1>
			</div>
			<div className='center'>
				<input placeholder='Поиск' className='search'></input>
			</div>
			<div className='right-side'>
				<img className='favorite' alt='favorite' src='https://media.discordapp.net/attachments/888505536457367552/1101961803648475166/icons8-heart-100.png'></img>
				<img className='cart' alt='cart' src='https://media.discordapp.net/attachments/888505536457367552/1101961803883368598/icons8-shopping-cart-90.png'></img>
			</div>
		</div>
	</header>
	
  )
}

export default Header