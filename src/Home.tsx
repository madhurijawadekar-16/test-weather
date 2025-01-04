import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import useFetch from './useFetch'

const Home = () => {
	const filterData = (query: any, data: any) => {
		if (!query) {
			return data
		} else {
			return data?.name === query
		}
	}

	const [searchQuery, setSearchQuery] = useState('')
	const { weatherData } = useFetch(searchQuery)
	const dataFiltered = filterData(searchQuery, weatherData)

	return (
		<div
			style={{
				display: 'flex',
				alignSelf: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				padding: 20,
			}}
		>
			<form>
				<TextField
					id='search-bar'
					className='text'
					onInput={(e: any) => {
						setSearchQuery(e.target.value)
					}}
					label='Enter a city name'
					variant='outlined'
					placeholder='Search...'
					size='small'
				/>
				<IconButton type='submit' aria-label='search'>
					<SearchIcon style={{ fill: 'blue' }} />
				</IconButton>
			</form>
			<div style={{ padding: 3 }}>
				{dataFiltered && dataFiltered?.main && dataFiltered?.weather && (
					<>
						<div className='header'>
							<h1 className='city'>{dataFiltered?.name}</h1>
							<p className='temperature'>{dataFiltered?.main?.temp}°F</p>
							<p className='condition'>{dataFiltered?.weather[0]?.main}</p>
						</div>
						<div className='weather-details'>
							<div>
								<p>Humidity</p>
								<p style={{ fontWeight: 'bold' }}>
									{Math.round(dataFiltered?.main?.humidity)}%
								</p>
							</div>
							<div>
								<p>Wind Speed</p>
								<p style={{ fontWeight: 'bold' }}>
									{Math.round(dataFiltered?.wind?.speed)} mph
								</p>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Home
