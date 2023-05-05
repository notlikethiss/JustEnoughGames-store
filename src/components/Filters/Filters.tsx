import React from 'react'

//components
import FilterButton from './FilterButton'

//data
import { filters } from '../../data/filters'

//types
import { IFilterState } from '../../Types/IFilterState'

const Filters:React.FC<IFilterState> = ({ setFilter, filter }) => {

  return (

	<div className='filters'>
			<FilterButton filterName={'Очистить фильтры'} setFilter={setFilter} clean={true}/>
		{
			filters.map((item, index) => (
				<FilterButton key={index} filterName={item.filterName} setFilter={setFilter}/>
			))
		}
	</div>

  )
}

export default Filters