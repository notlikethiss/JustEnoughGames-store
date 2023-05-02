import React from 'react'

//components
import CardItem from '../CardItem/CardItem'

//data
import { newGames } from '../../data/new.games'

//types
import { IFilter } from '../../Types/IFilter'

const GetNewGames:React.FC<IFilter> = ({ filter }) => {

  return (

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
								discount={item.discount}
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
								discount={item.discount}
								/>
							)
						}
					}
					return null
				})
			}
		</div>

  )
}

export default GetNewGames