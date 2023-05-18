import React from 'react'

import { ICardItem } from '../../Types/ICardItem'

const Product:React.FC<ICardItem> = ({ name, price, image, description }) => {

  return (

	<div className='product'>
		<h1>{name}</h1>
		<img src={image} alt='product'></img>
		<span>{price}</span>
		<p>{description}</p>
	</div>

  )
}

export default Product