import { useState, useEffect } from 'react'

const useFetch = (url: any) => {
	const options = { method: 'GET', headers: { accept: 'application/json' } }
	const [city, setCity] = useState('London')
	const API_KEY = 'c8aaec195ab29619041d53cced147c60'
	const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`

	const [weatherData, setData] = useState<any>([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(URL)
				if (!response.ok) {
					throw new Error('Failed to fetch data')
				}
				const result = await response.json()
				console.log(result, 'data')
				setData(result)
			} catch (error: any) {
				setError(error)
				setLoading(false)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [city])

	return { weatherData, loading, error }
}

export default useFetch
