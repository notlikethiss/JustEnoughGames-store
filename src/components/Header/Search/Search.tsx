import { useEffect } from 'react'

//styles
import './search.style.scss'

//types
import type { FC } from 'react'
import type { ISearch } from '../../../Types/ISearch'

const Search: FC<ISearch> = ({
    setSearchValue,
    setVisibleSearch,
    searchValue,
    mobileSearch,
}) => {
    useEffect(() => {
        if (searchValue || mobileSearch) {
            setVisibleSearch(true)
        } else {
            setVisibleSearch(false)
        }
    }, [searchValue, mobileSearch, setVisibleSearch])

    return (
        <div className="center">
            <input
                type="text"
                onChange={(event) => setSearchValue(event.currentTarget.value)}
                placeholder="Поиск"
                value={searchValue}
                className={!mobileSearch ? 'search' : 'search-mobile'}
            ></input>
        </div>
    )
}

export default Search
