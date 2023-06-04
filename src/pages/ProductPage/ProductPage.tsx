import React from 'react'

//components
import Product from '../../components/Product/Product'

//hooks
import { useParams, useNavigate } from 'react-router-dom'

//data
import { database } from '../../data/database'
import NotFound from '../../components/Header/Search/NotFound'
import NotFoundPage from '../NotFound/NotFoundPage'

const ProductPage:React.FC = () => {

  const nav = useNavigate()

  const { name } = useParams()

  const currentGame = database.filter(item => {
	return (
		item.name === name
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
			)) : <NotFoundPage />
		}
	</div>

  )
}

export default ProductPage