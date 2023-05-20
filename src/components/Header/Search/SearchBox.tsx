import React from 'react'

//components
import CardItem from '../../CardItem/CardItem'
import NotFound from './NotFound'

//data
import { newGames } from '../../../data/new.games'

//types
import { ISearch } from '../../../Types/ISearch'

const SearchBox:React.FC<ISearch> = ({ searchValue }) => {

  const filteredGames = newGames.filter(item => {
	return (
		item.name.toLowerCase().includes(searchValue.toLowerCase())
	)
  })

  return (

	<div className='searchBox'>
		{
			filteredGames.length === 0 

			? <NotFound /> :

			filteredGames.map((item, index) => (

				<CardItem
					key={index}
					name={item.name}
					description={item.description}
					filter={item.filter}
					image={item.image}
					price={item.price}
					discount={item.discount}
              />

			))
		}
	</div>

  )

}

export default SearchBox