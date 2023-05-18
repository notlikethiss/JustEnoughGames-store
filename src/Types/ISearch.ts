export interface ISearch {
	visibleSearch?: boolean
	searchValue: string
	setSearchValue: (event: string) => void
	setVisibleSearch: (visible:boolean) => void
}