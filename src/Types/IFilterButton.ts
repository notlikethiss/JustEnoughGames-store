export interface IFilterButton {
	filterName:string
	setFilter:(filter:string) => void
	clean?: boolean
}