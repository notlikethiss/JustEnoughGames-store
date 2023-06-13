import React from 'react'

import './notfound.style.scss'

const NotFoundPage: React.FC = () => {

  return (

    <div className='notfound'>
      <div className='notfound-container'>
        <h1 className='notfound-text'>Страница не найдена</h1>
        <img
          alt='emoji'
          className='search-image'
          src='https://em-content.zobj.net/thumbs/160/apple/118/pensive-face_1f614.png'
        >
        </img>
      </div>
    </div>

  )
}

export default NotFoundPage