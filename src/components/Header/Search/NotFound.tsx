import React from 'react'

const NotFound = () => {

  return (

	<div className='search-notfound'>
		<h1 className='search-notfound-text'>Не удалось ничего найти по вашему запросу</h1>
		<img 
			alt='emoji' 
			className='search-image' 
			src='https://em-content.zobj.net/thumbs/160/apple/118/pensive-face_1f614.png'
		>
		</img>
	</div>

  )
}

export default NotFound