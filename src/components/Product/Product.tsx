import React, { useCallback } from 'react'

//types
import { ICardItem } from '../../Types/ICardItem'

//redux-toolkit
import { useAppDispatch } from '../../hooks'
import { addToCart } from '../../store/slices/cartSlice'

//styles
import './product.style.scss'

const Product: React.FC<ICardItem> = (product) => {

	const dispatch = useAppDispatch()

	const cartHandler = useCallback(() => {
		dispatch(addToCart(product))
	}, [product, dispatch])

	return (
		<div className='product-wrapper'>
			<div className='product-card'>
				<div className='product-image' style={{ backgroundImage: `url(${product.image})` }} />
				<div className='product-rightSide'>
					<h1 className='product-name'>{product.name}</h1>
					<p className='product-dev'>Разработчик: <br /> {product.developer}</p>
					<p className='product-category'>Жанр: <br />{product.description}</p>
					<span className='product-price'>{product.price} ₽</span>
					<button onClick={cartHandler} className='product-button'>В корзину</button>
				</div>
			</div>
		</div>

	)

}

export default Product