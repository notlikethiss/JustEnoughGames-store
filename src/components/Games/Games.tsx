import { useState, type FC } from 'react'

//components
import Filters from '../Filters/Filters'
import GetGames from './GetGames'

//styles
import './newGames.style.scss'
import DeveloperPick from './DeveloperPick'

const Games: FC = () => {
    const [filter, setFilter] = useState('')

    return (
        <div className="new-games">
            <Filters filter={filter} setFilter={setFilter} />
            <DeveloperPick />
            <h1 className="new-games-text">Каталог</h1>
            <GetGames filter={filter} setFilter={setFilter} />
        </div>
    )
}

export default Games
