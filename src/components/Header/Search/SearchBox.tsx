//components
import CardItem from '../../CardItem/CardItem'
import NotFound from './NotFound'

//data
import { database } from '../../../data/database'

//types
import type { ISearch } from '../../../Types/ISearch'
import type { FC } from 'react'

const SearchBox: FC<ISearch> = ({ searchValue }) => {
    const filteredGames = database.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (
        <div className="searchBox">
            {filteredGames.length === 0 ? (
                <NotFound />
            ) : (
                filteredGames.map((item) => (
                    <CardItem
                        key={item.id}
                        name={item.name}
                        description={item.description}
                        filter={item.filter}
                        image={item.image}
                        price={item.price}
                        discount={item.discount}
                        id={item.id}
                    />
                ))
            )}
        </div>
    )
}

export default SearchBox
