import React from 'react'

//types
import { IMenuVisible } from '../../../Types/IMenuVisible'

const Logo:React.FC<IMenuVisible> = (props) => {

  return (

    <div className='left-side'>
      <div onClick={() => props.visible ? props.setVisible(false) : props.setVisible(true)} className='menu-button'>
        <img className='menu-image' alt='menu' src='https://media.discordapp.net/attachments/888505536457367552/1101959347120111647/icons8-menu-100.png'></img>
      </div>
      <h1 className='logo-font'>Just Enough Games</h1>
    </div>

  )

}

export default Logo