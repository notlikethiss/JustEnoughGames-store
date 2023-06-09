import React from 'react'

//hooks
import { useAppSelector } from '../../../hooks'

//types
import { ICart } from '../../../Types/ICart'

const ActionPanel: React.FC<ICart> = ({ visibleCart, setVisibleCart }) => {

	const { cartContainer } = useAppSelector((state) => state.cartContainer)

	return (

		<div className='right-side'>
			<img
				className='favorite'
				alt='favorite'
				src='https://media.discordapp.net/attachments/888505536457367552/1101961803648475166/icons8-heart-100.png'
			></img>
			<div onClick={() => visibleCart ? setVisibleCart(false) : setVisibleCart(true)} className='cart-panel'>
				<div className='cart-counter'>{cartContainer.length === 0 ? null : cartContainer.length}</div>
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