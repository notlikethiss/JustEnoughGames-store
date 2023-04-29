import React from 'react'

import { ICardItem } from '../../Types/ICardItem'

import './carditem.style.scss'

const CardItem:React.FC<ICardItem> = (props) => {

  return (

	<div className='carditem'>
		<div className='blur'></div>
		<div className='carditem-image' style={{backgroundImage: `url(${props.image})`}}></div>
		<h1 className='carditem-name'>{props.name}</h1>
		<p className='carditem-description'>{props.description}</p>
		<span className='carditem-price'>{props.price} ₽</span>
		<button className='carditem-button'>В корзину</button>
	</div>

  )
}

export default CardItem