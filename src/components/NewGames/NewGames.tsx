import React, { useState } from 'react'

//components
import Filters from '../Filters/Filters'
import GetNewGames from './GetNewGames'

//styles
import './newGames.style.scss'

const NewGames:React.FC = () => {

  const [filter, setFilter] = useState('')

  return (
	<div className='new-games'>
		<Filters filter={filter} setFilter={setFilter}/>
		<h1 className='new-games-text'>Новинки</h1>
		<GetNewGames filter={filter} setFilter={setFilter}/>
	</div>
  )
}

export default NewGames