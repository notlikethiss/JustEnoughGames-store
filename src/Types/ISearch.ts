import { IMobileSearch } from './IMobileSearch'
export interface ISearch extends IMobileSearch {
    visibleSearch?: boolean
    searchValue: string
    mobile?: boolean
    toggleAllPopups: () => void
    setSearchValue: (event: string) => void
    setVisibleSearch: (visible: boolean) => void
}
