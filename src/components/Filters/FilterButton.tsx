import React from 'react'

interface IFilterButton {
	filterName:string
	handleFilter:(filter:string) => void
}

const FilterButton:React.FC<IFilterButton> = ({ filterName, handleFilter }) => {

  return (
	<button 
		onClick={() => handleFilter(`${filterName}`)} 
		className={`filter ${filterName}`}
	>
	{filterName}
	</button>
  )
}

export default FilterButton