import React from 'react'

import CardItem from '../CardItem/CardItem'
import { newGames } from '../../data/new.games'

import './newGames.style.scss'

const NewGames:React.FC = () => {

  return (
	<div className='new-games'>
		<h1>Новинки	</h1>
		<div className='store-grid'>
			{
				newGames.map((item, index) => (
					<CardItem key={index} name={item.name} description={item.description} image={item.image} price={item.price}/>
				))
			}
		</div>
	</div>
  )
}

export default NewGames