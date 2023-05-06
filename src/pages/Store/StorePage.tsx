import React from 'react'

import NewGames from '../../components/NewGames/NewGames'

import './store.style.scss'
import FavoriteGames from '../../components/FavoriteGames/FavoriteGames'

const StorePage:React.FC = () => {

  return (
    <div className='store'>
      <NewGames/>
      <FavoriteGames/>
    </div>
  )
}

export default StorePage