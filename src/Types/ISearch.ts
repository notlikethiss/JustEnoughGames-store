export interface ISearch {
	visibleSearch?: boolean
	searchValue: string
	mobile?: boolean
	setSearchValue: (event: string) => void
	setVisibleSearch: (visible:boolean) => void
}