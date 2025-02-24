import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {
	useDeleteProductsByIdMutation,
	useUpdateProductsByIdMutation,
} from '../store/api/products.api'
import { toggleFavorites } from '../store/slices/favoritesSlice'

const Products = ({ data, isLoading, isError, title, isAdminComponent }) => {
	const dispatch = useDispatch()
	const { favorites } = useSelector(state => state.favorites)
	const [deleteProduct] = useDeleteProductsByIdMutation()
	const [updateProduct] = useUpdateProductsByIdMutation()
	const [modul, setModul] = useState(null)

	const handleUpdateProduct = e => {
		e.preventDefault()
		updateProduct({ id: modul?.id, patch: modul })
		setModul(null)
	}

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
								<NavLink to={`/products/${item.id}`}>
									<h1>{item.name}</h1>
								</NavLink>
								<span
									onClick={() => dispatch(toggleFavorites(item))}
									className='favorites__btn'
								>
									{favorites?.some(element => element.id === item.id)
										? '💕'
										: '❤️'}
								</span>
								{isAdminComponent ? (
									<>
										<button onClick={() => deleteProduct(item.id)}>🗑️</button>
										<button onClick={() => setModul(item)}>✎</button>
									</>
								) : (
									<></>
								)}
							</div>
						))
					) : (
						<h1>There's no products left</h1>
					)}
				</div>
				{modul ? (
					<form onSubmit={handleUpdateProduct} className='modul'>
						<input
							value={modul.name}
							onChange={e =>
								setModul(prev => ({ ...prev, name: e.target.value }))
							}
							required
							type='text'
							placeholder='Products name'
						/>
						<input
							value={modul.avatar}
							onChange={e =>
								setModul(prev => ({ ...prev, avatar: e.target.value }))
							}
							required
							type='text'
							placeholder='Products image'
						/>
						<div className='modul__btn'>
							<button onClick={() => setModul(null)} type='button'>
								Cancel
							</button>
							<button>Submit</button>
						</div>
					</form>
				) : (
					<></>
				)}
			</div>
		</section>
	)
}

export default Products
