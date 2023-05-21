import React from 'react'

import { useAppSelector } from '../../hooks'
import CardItem from '../CardItem/CardItem'

//types
import { ICardItem } from '../../Types/ICardItem'

const Cart:React.FC = () => {

  const { Cart } = useAppSelector((state) => state)

  return (

	<div className='cart'>
		{
			Cart.map((item:ICardItem) => (
				<CardItem 
					key={item.id} 
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

  )
}

export default Cart