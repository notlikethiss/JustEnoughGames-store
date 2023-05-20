import React from 'react'

import Games from '../../components/Games/Games'

import './store.style.scss'

const StorePage:React.FC = () => {

  return (
    <div className='store'>
      <Games />
    </div>
  )
}

export default StorePage