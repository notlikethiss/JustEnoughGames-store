import type { FC } from 'react'
import Emoji from '../../Emoji/Emoji'

const NotFound: FC = () => {
    return (
        <div className="search-notfound">
            <h1 className="search-notfound-text">
                Не удалось найти по вашему запросу
            </h1>
            <Emoji variant="inSearch" src="/emojis/pensive.png" />
        </div>
    )
}

export default NotFound
