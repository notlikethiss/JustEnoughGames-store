import React from 'react'

//components
import CardItem from '../CardItem/CardItem'

//data
import { database } from '../../data/database'

//types
import { IFilterState } from '../../Types/IFilterState'

const GetNewGames:React.FC<IFilterState> = ({ filter }) => {

  return (

	<div className='store-grid'>
			{
				database.map((item) => {
					for(let i = 0; i < item.filter.length; i++){
						if(item.filter[i] === filter){
							return (
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
							)
						}
						if(!filter){
							return (
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