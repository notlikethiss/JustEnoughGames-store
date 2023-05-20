import React from 'react'

import { useParams } from 'react-router-dom'
import CardItem from '../../components/CardItem/CardItem'

import { database } from '../../data/database'

const Product:React.FC = () => {

  const { name } = useParams()

  const filteredGames = database.filter(item => {
	return (
		item.name === name
	)
  })

  return (

	<div className='product'>
		{
			filteredGames.map((item) => (
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

export default Product