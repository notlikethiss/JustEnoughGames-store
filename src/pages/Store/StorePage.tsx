import React from 'react'

import NewGames from '../../components/NewGames/NewGames'

import './store.style.scss'
import FavGames from '../../components/FavGames/FavGames'

const StorePage:React.FC = () => {

  return (
    <div className='store'>
      <NewGames/>
      <FavGames/>
    </div>
  )
}

export default StorePage