import React from 'react'

//types
import { IFilter } from '../../Types/IFilter'

const Filters:React.FC<IFilter> = (props) => {

  return (

	<div className='filters'>
		<button onClick={() => props.setFilter('')} className='filter Clean'>Очистить фильтры</button>
		<button onClick={() => props.setFilter('Adventure')} className='filter Adventure'>Приключение</button>
		<button onClick={() => props.setFilter('RPG')} className='filter RPG'>RPG</button>
		<button onClick={() => props.setFilter('OpenWorld')} className='filter OpenWorld'>Открытый мир</button>
		<button onClick={() => props.setFilter('Shooter')} className='filter Shooter'>Шутер</button>
		<button onClick={() => props.setFilter('Horror')} className='filter Horror'>Хоррор</button>
	</div>

  )
}

export default Filters