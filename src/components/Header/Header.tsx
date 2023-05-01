import React, { useState } from 'react'

//components
import Menu from '../Menu/Menu'
import Logo from './Logo/Logo'

//styles
import './header.style.scss'

const Header:React.FC = () => {

  const [visible, setVisible] = useState(false)

  return (
	<header className='header'>
		<div className='internal-header'>
			<Logo visible={visible} setVisible={setVisible}/>
			<div className='center'>
				<input placeholder='Поиск' className='search'></input>
			</div>
			<div className='right-side'>
				<img className='favorite' alt='favorite' src='https://media.discordapp.net/attachments/888505536457367552/1101961803648475166/icons8-heart-100.png'></img>
				<img className='cart' alt='cart' src='https://media.discordapp.net/attachments/888505536457367552/1101961803883368598/icons8-shopping-cart-90.png'></img>
			</div>
		</div>
		{
			visible ? <Menu /> : null
		}
	</header>
	
  )
}

export default Header