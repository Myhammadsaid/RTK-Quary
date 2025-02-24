import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsByIdQuery } from '../store/api/products.api'

const SingleRoute = () => {
	const { id } = useParams()
	const { data, isLoading } = useGetProductsByIdQuery(id)

	return (
		<section className='single__route'>
			<div className='container'>
				<h1>SingleRoute {id}</h1>
				{isLoading ? (
					<h1>Loading...</h1>
				) : (
					<div>
						<img src={data?.avatar} alt={data?.name} />
						<h1>{data?.name}</h1>
					</div>
				)}
			</div>
		</section>
	)
}

export default SingleRoute
