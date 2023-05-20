import React from 'react'
import { Link } from 'react-router-dom'

const Logo:React.FC = () => {

  return (

    <div className='left-side'>
      <div className='menu-button'>
        <img className='menu-image' alt='menu' src='https://media.discordapp.net/attachments/888505536457367552/1101959347120111647/icons8-menu-100.png'></img>
      </div>

      <Link to={'/store'} className='header-link'>
        <h1 className='logo-font'>Just Enough Games</h1>
      </Link>

    </div>

  )

}

export default Logo