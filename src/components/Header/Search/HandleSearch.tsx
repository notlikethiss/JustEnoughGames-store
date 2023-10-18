import type { FC } from 'react'

//components
import SearchBox from './SearchBox'

//types
import { ISearch } from '../../../Types/ISearch'

const HandleSearch: FC<ISearch> = ({
    visibleSearch,
    setMobileSearch,
    searchValue,
    setSearchValue,
    setVisibleSearch,
}) => {
    if (visibleSearch) {
        return (
            <SearchBox
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
