//components
import SearchBox from './SearchBox'
import { useEffect } from 'react'

//types
import type { FC } from 'react'
import type { ISearch } from '../../../Types/ISearch'

const HandleSearch: FC<ISearch> = ({
    visibleSearch,
    toggleAllPopups,
    setMobileSearch,
    searchValue,
    setSearchValue,
    setVisibleSearch,
}) => {
    useEffect(() => {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                setSearchValue('')
                toggleAllPopups()
            }
        })
    }, [setSearchValue, toggleAllPopups])

    if (visibleSearch) {
        return (
            <SearchBox
                toggleAllPopups={toggleAllPopups}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                setVisibleSearch={setVisibleSearch}
                setMobileSearch={setMobileSearch}
            />
        )
    } else {
        return null
    }
}

export default HandleSearch
