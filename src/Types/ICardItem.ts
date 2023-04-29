export interface ICardItem {
	image: string
	name: string
	description: string
	price: number
	filter: string[]
	key?: number | string
}