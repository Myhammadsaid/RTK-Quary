import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteProductsByIdMutation } from '../store/api/products.api'
import { toggleFavorites } from '../store/slices/favoritesSlice'

const Products = ({ data, isLoading, isError, title, isAdminComponent }) => {
	const dispatch = useDispatch()
	const { favorites } = useSelector(state => state.favorites)
	const [deleteProduct] = useDeleteProductsByIdMutation()

	return (
		<section className='products'>
			<div className='container'>
				<h1 className='products__title'>{title}</h1>
				<div className='products__items'>
					{isError ? (
						<h1>Error</h1>
					) : isLoading ? (
						<h1>Loading...</h1>
					) : data?.length ? (
						data?.map(item => (
							<div className='products__item' key={item.id}>
								<img src={item.avatar} alt={item.name} />
								<h1>{item.name}</h1>
								<span
									onClick={() => dispatch(toggleFavorites(item))}
									className='favorites__btn'
								>
									{favorites?.some(element => element.id === item.id)
										? '💕'
										: '❤️'}
								</span>
								{isAdminComponent ? (
									<button onClick={() => deleteProduct(item.id)}>🗑️</button>
								) : (
									<></>
								)}
							</div>
						))
					) : (
						<h1>There's no products left</h1>
					)}
				</div>
			</div>
		</section>
	)
}

export default Products
