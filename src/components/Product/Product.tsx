import React from 'react'

//types
import { ICardItem } from '../../Types/ICardItem'

//styles
import './product.style.scss'

const Product:React.FC<ICardItem> = ({ name, description, price, id, filter, image }) => {

  return (

	<div className='product-card'>
		<div className='product-image' style={{backgroundImage: `url(${image})`}}/>
		<div className='product-rightSide'>
			<h1 className='product-name'>{name}</h1>
			<p className='product-category'>{description}</p>
			<span className='product-price'>{price} ₽</span>
			<button className='product-button'>В корзину</button>
		</div>
	</div>

  )

}

export default Product