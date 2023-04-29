import React from 'react'

import { devFavorite } from '../../data/dev.favorite'
import './favgames.styles.scss'
import CardItem from '../CardItem/CardItem'

const FavGames = () => {

  return (

	<div className='dev-favorite'>
		<h1 className='fav-text'>Выбор Разработчика</h1>
		<div className='store-grid'>
			{
				devFavorite.map((item, index) => (
					<CardItem 
						key={index} 
						name={item.name} 
						description={item.description} 
						filter={item.filter} 
						image={item.image} 
						price={item.price}
					/>
				))
			}
		</div>
	</div>

  )

}

export default FavGames