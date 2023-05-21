export interface ICardItem {
	image: string
	name: string
	description: string
	price: number
	filter: string[]
	discount?: string | number
	key?: number
	className?: string
	developer?: string
	id: number
}