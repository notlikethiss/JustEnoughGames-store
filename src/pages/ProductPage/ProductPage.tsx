import React from 'react'

//components
import Product from '../../components/Product/Product'

//hooks
import { useParams } from 'react-router-dom'

//data
import { database } from '../../data/database'
import NotFound from '../../components/Header/Search/NotFound'

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
			currentGame.length !== 0 ? currentGame.map((item) => (
				<Product 
					key={item.id}
					name={item.name}
					description={item.description}
					developer={item.developer}
					price={item.price}
					id={item.id}
					image={item.image}
					filter={item.filter}
				/>
			)) : <NotFound />
		}
	</div>

  )
}

export default ProductPage