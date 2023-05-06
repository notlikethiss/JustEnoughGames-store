export async function fetchData(path:string) {
	try {
		const response = await fetch(path)
		const data = await response.json()
		
		return data
	} catch(error){
		console.error(error)
	}
}