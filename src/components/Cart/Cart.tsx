import React from 'react'

import { useAppSelector } from '../../hooks'
import CartProduct from './CartProduct/CartProduct'

//types
import { ICardItem } from '../../Types/ICardItem'
import { ICart } from '../../Types/ICart'

import './cart.style.scss'

const Cart:React.FC<ICart> = ({ visibleCart }) => {

  const { cartFluid } = useAppSelector((state) => state)

  const fullPrice = cartFluid.reduce((accumulator:number, item:ICardItem) => {
		return accumulator + item.price
  }, 0)

  if(visibleCart) {

	return (
		<div className='cart-menu'>
			<div className='cart-list'>
				{
					cartFluid.map((item:ICardItem, index:number) => (
						<CartProduct
							key={index} 
							name={item.name} 
							description={item.description} 
							filter={item.filter} 
							image={item.image} 
							price={item.price}
							discount={item.discount}
							id={item.id}
						/>
					))
				}
			</div>
			<div className='cart-confirm'>
				<p className='cart-fullprice'>Итого: { fullPrice } ₽</p>
				<button className='confirm-button'>Оформить заказ</button>
			</div>
		</div>
	  )

  } else {

	return null

  }

}

export default Cart