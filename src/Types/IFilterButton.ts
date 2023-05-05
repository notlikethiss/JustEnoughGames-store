export interface IFilterButton {
	filterName: string
	filter: string
	setFilter:(filter:string) => void
	clean?: boolean
}