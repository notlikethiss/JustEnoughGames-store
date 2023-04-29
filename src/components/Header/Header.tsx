import React from 'react'
import { Link } from 'react-router-dom'

import './header.style.scss'

const Header:React.FC = () => {

  return (

	<header className='header'>
		<div className='internal-header'>
			<div className='left-side'>
				<h1 className='logoFont'>Just Enough Games</h1>
			</div>
			<div className='center'>
				<input placeholder='Поиск' className='search'></input>
			</div>
			<div className='right-side'>
				<p className='link'>Избранное</p>
				<p className='link'>Корзина</p>
			</div>
		</div>
	</header>
	
  )
}

export default Header