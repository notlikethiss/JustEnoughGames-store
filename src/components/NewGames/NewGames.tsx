import React, { useState } from 'react'

import CardItem from '../CardItem/CardItem'
import { newGames } from '../../data/new.games'

import './newGames.style.scss'

const NewGames:React.FC = () => {
  
  const [filter, setFilter] = useState('')

  return (
	<div className='new-games'>
		<div className='filters'>
			<button onClick={() => setFilter('')} className='filter Adventure'>X</button>
			<button onClick={() => setFilter('Adventure')} className='filter Adventure'>Приключение</button>
			<button onClick={() => setFilter('RPG')} className='filter RPG'>RPG</button>
			<button onClick={() => setFilter('OpenWorld')} className='filter OpenWorld'>Открытый мир</button>
			<button onClick={() => setFilter('Shooter')} className='filter Shooter'>Шутер</button>
			<button onClick={() => setFilter('Horror')} className='filter Horror'>Хоррор</button>
		</div>
		<h1 className='new-games-text'>Новинки</h1>
		<div className='store-grid'>
			{
				newGames.map((item, index) => {
					for(let i = 0; i < item.filter.length; i++){
						if(item.filter[i] === filter){
							return (
								<CardItem 
								key={index} 
								name={item.name} 
								description={item.description} 
								filter={item.filter} 
								image={item.image} 
								price={item.price}
								/>
							)
						}
						if(!filter){
							return (
								<CardItem 
								key={index} 
								name={item.name} 
								description={item.description} 
								filter={item.filter} 
								image={item.image} 
								price={item.price}
								/>
							)
						}
					}
				})
			}
		</div>
	</div>
  )
}

export default NewGames