import React from 'react'

import CardItem from '../../components/CardItem/CardItem'

import './store.style.scss'

const StorePage:React.FC = () => {

  return (
    <div className='store'>
      <div className='store-grid'>
        <CardItem
        image='https://ovicio.com.br/wp-content/uploads/2022/11/20221114-ovicio-elden-ring-capa-555x555.webp' 
        name='Elden Ring' 
        price={3999}
        />
        <CardItem
        image='https://upload.wikimedia.org/wikipedia/ru/b/bb/Dark_souls_3_cover_art.jpg' 
        name='Dark Souls III' 
        price={2799}
        />
       </div>
    </div>
  )
}

export default StorePage