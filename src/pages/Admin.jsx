import React from 'react'
import CreateProducts from '../components/CreateProducts'
import Products from '../components/Products'
import { useGetProductsQuery } from '../store/api/products.api'

const Admin = () => {
	const { data, isLoading, isError } = useGetProductsQuery()

	return (
		<section className='admin'>
			<div className='container'>
				<h1>Admin Panel</h1>
				<CreateProducts />
				<Products
					data={data}
					isLoading={isLoading}
					isError={isError}
					title={'Admin Panel Products'}
					isAdminComponent={true}
				/>
			</div>
		</section>
	)
}

export default Admin
