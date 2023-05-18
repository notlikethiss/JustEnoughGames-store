import React from 'react'

import CardItem from '../../CardItem/CardItem'

import { newGames } from '../../../data/new.games'
import { ISearch } from '../../../Types/ISearch'

const SearchBox:React.FC<ISearch> = ({ searchValue }) => {

  console.log(searchValue)

  const filteredGames = newGames.filter(item => {
	return item.name.toLowerCase().includes(searchValue.toLowerCase())
  })

  return (

	<div className='searchBox'>
		{
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