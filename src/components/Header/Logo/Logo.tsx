import React from 'react'
import { Link } from 'react-router-dom'
import { ISearch } from '../../../Types/ISearch'

import MobileSearch from '../Search/MobileSearch'
import Search from '../Search/Search'

const Logo:React.FC<ISearch> = ({ searchValue, visibleSearch, setVisibleSearch, setSearchValue }) => {

  return (

    <div className='left-side'>
      <div className='search-button-mobile'>
        <img 
          className='search-icon-mobile' 
          src='https://i.imgur.com/H5vidBM.png' 
          alt='search'
          onClick={() => (
            <Search
              setVisibleSearch={setVisibleSearch} 
              searchValue={searchValue} 
              setSearchValue={setSearchValue}
              mobile={true}
            />
          )}
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