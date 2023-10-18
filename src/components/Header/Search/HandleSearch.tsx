//components
import SearchBox from './SearchBox'

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
