import React from 'react'

//types
import { ICardItem } from '../../Types/ICardItem'

//styles
import './carditem.style.scss'

const CardItem:React.FC<ICardItem> = ({ name, image, className, price, description, discount }) => {

  return (

	<div className='carditem'>
		<div className='carditem-image' style={{backgroundImage: `url(${image})`}}></div>
		<div className='carditem-controls'>
			<h1 className={`carditem-name ${className}`}>{name}</h1>
			<p className='carditem-description'>{description}</p>
			<div className='carditem-prices'>
				<span className='carditem-price'>{price} ₽</span>
				{ discount ? <span className='carditem-discount'>{discount} ₽</span> : null}
			</div>
			<button className='carditem-button'>В корзину</button>
		</div>
	</div>

  )
}

export default CardItem