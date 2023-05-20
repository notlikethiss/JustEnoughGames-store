import React from 'react'

import { useParams } from 'react-router-dom'
import CardItem from '../../components/CardItem/CardItem'

import { database } from '../../data/database'
import Product from '../../components/Product/Product'

const ProductPage:React.FC = () => {

  const { id } = useParams()

  const currentGame = database.filter(item => {
	return (
		item.id.toString() === id
	)
  })

  return (

	<div className='product'>
		{
			currentGame.map((item) => (
				<Product 
					key={item.id}
					name={item.name}
					description={item.description}
					price={item.price}
					id={item.id}
					image={item.image}
					filter={item.filter}
				/>
			))
		}
	</div>

  )
}

export default ProductPage