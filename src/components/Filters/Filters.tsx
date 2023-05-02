import React, { useCallback } from 'react'

//types
import { IFilter } from '../../Types/IFilter'
import FilterButton from './FilterButton'

const Filters:React.FC<IFilter> = ({ setFilter }) => {

  const handleFilter = useCallback((filter:string) => {
	setFilter(filter)
  },[setFilter])

  const filtersArray:string[] = ['Приключение', 'RPG', 'Открытый мир', 'Шутер', 'Хоррор']

  return (

	<div className='filters'>
			<FilterButton filterName={'Очистить фильтры'} handleFilter={handleFilter}/>
		{
			filtersArray.map((item, index) => (
				<FilterButton key={index} filterName={item} handleFilter={handleFilter}/>
			))
		}
	</div>

  )
}

export default Filters