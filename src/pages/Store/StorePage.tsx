import React from 'react'

//components
import Games from '../../components/Games/Games'

//styles
import './store.style.scss'

const StorePage: React.FC = () => {

  return (
    <div className='store'>
      <Games />
    </div>
  )
}

export default StorePage