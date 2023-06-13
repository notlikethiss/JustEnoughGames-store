import React from 'react'

import { useNavigate } from 'react-router-dom'

//styles
import './home.style.scss'
import { database } from '../../data/database'
import CardItem from '../../components/CardItem/CardItem'

const HomePage: React.FC = () => {

  const nav = useNavigate()

  const [newGame] = database

  return (

    <div className='home-wrapper'>
      <div className='home-info'>
        <div className='home-left'>
          <h1 className='home-text'>Покупай игры <br /> на Just Enough Games</h1>
          <button onClick={() => nav('/store')} className='home-button'>Перейти к покупкам</button>
        </div>
        <div className="home-right">
          <h1 className='home-text'>Новинка!</h1>
          <div className='home-newgame'>
            <CardItem
              name={newGame.name}
              description={newGame.description}
              filter={newGame.filter}
              image={newGame.image}
              price={newGame.price}
              discount={newGame.discount}
              id={newGame.id}
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage