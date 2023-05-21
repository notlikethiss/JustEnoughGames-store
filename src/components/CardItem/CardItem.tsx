import React, { useCallback } from 'react'

//types
import { ICardItem } from '../../Types/ICardItem'

//redux-toolkit
import { useAppDispatch } from '../../hooks'
import { addToCart } from '../../store/slices/cartSlice'
//styles
import './carditem.style.scss'
import { Link } from 'react-router-dom'

const CardItem:React.FC<ICardItem> = (product) => {

  const privateURL:string = `/products/${product.id}`

  const dispatch = useAppDispatch()

  const favoriteHandler = useCallback(() => {
	dispatch(addToCart(product))
  }, [product, dispatch])

  return (

	<div className='carditem'>
		<Link to={privateURL} className='carditem-link'>
			<div 
				className='carditem-image' 
				style={{backgroundImage: `url(${product.image})`}}
			>
			</div>
		</Link>
		<div className='carditem-controls'>
			<h1 className={`carditem-name ${product.className}`}>{product.name}</h1>
			<p className='carditem-description'>{product.description}</p>
			<div className='carditem-prices'>
				<span className='carditem-price'>{product.price} ₽</span>
				{ product.discount ? <span className='carditem-discount'>{product.discount} ₽</span> : null}
			</div>
			<button onClick={favoriteHandler} className='carditem-button'>В корзину</button>
		</div>
	</div>

  )
}

export default CardItem