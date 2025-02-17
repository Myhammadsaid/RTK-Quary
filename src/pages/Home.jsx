import React from 'react'
import Products from '../components/Products'
import { useGetProductsQuery } from '../store/api/products.api'

const Home = () => {
	const { data, isLoading, isError } = useGetProductsQuery()

	return (
		<>
			<Products
				data={data}
				isLoading={isLoading}
				isError={isError}
				title={'Products'}
				isAdminComponent={false}
			/>
		</>
	)
}

export default Home
