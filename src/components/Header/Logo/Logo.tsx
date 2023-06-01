import React, { useEffect } from 'react'

//components
import { Link } from 'react-router-dom'

//types
import { ISearch } from '../../../Types/ISearch'

const Logo:React.FC<ISearch> = ({ setMobileSearch, setVisibleSearch, visibleSearch, mobileSearch }) => {

  return (

    <div className='left-side'>
      <div className='search-button-mobile'>
        <img 
          className='search-icon-mobile' 
          src='https://i.imgur.com/H5vidBM.png' 
          alt='search'
          onClick={() => {
            mobileSearch ? setMobileSearch(false) : setMobileSearch(true)
          }}
        >
        </img>
      </div>
      <div className='menu-button'>
        <img 
          className='menu-image' 
          alt='menu' 
          src='https://media.discordapp.net/attachments/888505536457367552/1101959347120111647/icons8-menu-100.png'
          >
        </img>
      </div>

      <Link to={'/store'} className='header-link'>
        <h1 className='logo-font'>Just Enough Games</h1>
      </Link>

    </div>

  )

}

export default Logo