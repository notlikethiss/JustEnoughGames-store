import React from 'react'

import { ICardItem } from '../../../Types/ICardItem'

const CartProduct:React.FC<ICardItem> = (product) => {

  return (

	<div className='cart-product'>
		<div className='cart-image' style={{backgroundImage: `url(${product.image})`}}/>
		<div className='product-info'>
			<h1 className='cart-name'>{product.name}</h1>
			<p className='cart-price'>{product.price} ₽</p>
		</div>
	</div>

  )
}

export default CartProduct