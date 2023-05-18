import React from 'react'

//types
import { IFilterButton } from '../../Types/IFilterButton'

const FilterButton:React.FC<IFilterButton> = ({ filterName, filter, setFilter, clean }) => {

  const checkCleanFilters = (filterName:string) => {

	if(filterName === 'Очистить фильтры'){
		return ''
	} else {
		return filterName
	}

  }

  return (

	<button 
		onClick={() => setFilter(checkCleanFilters(filter))}
		className={ clean ? 'filter Clean' : `filter ${filterName}`}
	>
		{filterName}
	</button>

  )
}

export default FilterButton