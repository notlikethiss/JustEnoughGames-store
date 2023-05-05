import React from 'react'


import { IFilterButton } from '../../Types/IFilterButton'

const FilterButton:React.FC<IFilterButton> = ({ filterName, setFilter, clean }) => {

  const checkCleanFilters = (filterName:string) => {
	if(filterName === 'Очистить фильтры'){
		return ''
	} else {
		return filterName
	}
  }

  return (
	<button 
		onClick={() => setFilter(checkCleanFilters(filterName))}
		className={ clean ?`filter Clean` : `filter ${filterName}`}
	>
		{filterName}
	</button>
  )
}

export default FilterButton