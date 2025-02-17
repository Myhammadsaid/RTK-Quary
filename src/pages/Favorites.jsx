import React from 'react'
import { useSelector } from 'react-redux'
import Products from '../components/Products'

const Favorites = () => {
	const { favorites } = useSelector(state => state.favorites)

	return (
		<Products data={favorites} title={'Favorites'} isAdminComponent={false} />
	)
}

export default Favorites
