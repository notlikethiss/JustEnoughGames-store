import React from 'react'

//types
import { ICardItem } from '../../Types/ICardItem'

//styles
import './carditem.style.scss'

const CardItem:React.FC<ICardItem> = (props) => {

  return (

	<div className='carditem'>
		<div className='carditem-image' style={{backgroundImage: `url(${props.image})`}}></div>
		<div className='carditem-controls'>
			<h1 className={`carditem-name ${props.className}`}>{props.name}</h1>
			<p className='carditem-description'>{props.description}</p>
			<span className='carditem-price'>{props.price} ₽</span>
			<button className='carditem-button'>В корзину</button>
		</div>
	</div>

  )
}

export default CardItem