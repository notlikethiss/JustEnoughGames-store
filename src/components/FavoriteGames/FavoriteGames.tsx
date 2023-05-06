import React from 'react'

//components
import CardItem from '../CardItem/CardItem'

//data
import { devFavorite } from '../../data/dev.favorite'

//styles
import './favoritegames.styles.scss'

const FavoriteGames:React.FC = () => {

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
						discount={item.discount}
						className='dev'
					/>
				))
			}
		</div>
	</div>

  )

}

export default FavoriteGames