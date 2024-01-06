import { FC } from 'react'
import { developerPick } from '../../data/database'
import CardItem from '../CardItem/CardItem'

const DeveloperPick: FC = () => {
    return (
        <div className="developer-pick">
            <h1 className="pick-heading">Выбор разработчика</h1>
            <div className="store-grid">
                {developerPick.map((item) => (
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
                ))}
            </div>
        </div>
    )
}

export default DeveloperPick
