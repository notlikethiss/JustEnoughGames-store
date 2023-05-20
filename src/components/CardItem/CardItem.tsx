import React from 'react'

//types
import { ICardItem } from '../../Types/ICardItem'

//styles
import './carditem.style.scss'
import { Link, redirect } from 'react-router-dom'

const CardItem:React.FC<ICardItem> = ({ name, image, className, price, description, discount, id }) => {

  const privateURL:string = `/products/${id}`
  

  return (

	<div className='carditem'>
		<Link to={privateURL} className='carditem-link'>
			<div 
				className='carditem-image' 
				style={{backgroundImage: `url(${image})`}}
			>
			</div>
		</Link>
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