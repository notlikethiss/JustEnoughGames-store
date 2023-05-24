import React from 'react'
import { useAppSelector } from '../../../hooks'

import { ICart } from '../../../Types/ICart'

const ActionPanel:React.FC<ICart> = ({ visibleCart, setVisibleCart }) => {
  
  const { cartFluid } = useAppSelector((state) => state)

  return (

	<div className='right-side'>
		<img 
			className='favorite' 
			alt='favorite' 
			src='https://media.discordapp.net/attachments/888505536457367552/1101961803648475166/icons8-heart-100.png'
		></img>
		<div onClick={() => visibleCart ? setVisibleCart(false) : setVisibleCart(true)} className='cart-panel'>
			<div className='cart-counter'>{cartFluid.length === 0 ? null : cartFluid.length}</div>
			<img 
				className='cart' 
				alt='cart' 
				src='https://media.discordapp.net/attachments/888505536457367552/1101961803883368598/icons8-shopping-cart-90.png'
			></img>
		</div>
	</div>

  )
}

export default ActionPanel