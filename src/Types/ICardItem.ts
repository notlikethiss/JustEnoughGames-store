export interface ICardItem {
	image: string
	name: string
	description: string
	price: number
	filter: string[]
	discount?: string | number
	key?: number | string
	className?: string
}