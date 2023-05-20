import React from 'react'

import NewGames from '../../components/NewGames/NewGames'

import './store.style.scss'

const StorePage:React.FC = () => {

  return (
    <div className='store'>
      <NewGames/>
    </div>
  )
}

export default StorePage