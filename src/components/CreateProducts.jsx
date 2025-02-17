import React, { useState } from 'react'
import { useCreateProductsMutation } from '../store/api/products.api'

const InitialState = {
	name: '',
	avatar: '',
}

const CreateProducts = () => {
	const [dataForm, setDataForm] = useState(InitialState)
	const [createProduct] = useCreateProductsMutation()

	const handleSubmit = e => {
		e.preventDefault()
		createProduct(dataForm)
		setDataForm(InitialState)
	}

	return (
		<section className='create-products'>
			<div className='container'>
				<h1 className='create-products__title'>CreateProducts</h1>
				<form onSubmit={handleSubmit}>
					<input
						value={dataForm.name}
						onChange={e => setDataForm({ ...dataForm, name: e.target.value })}
						type='text'
						placeholder='User Name'
					/>
					<textarea
						value={dataForm.avatar}
						onChange={e => setDataForm({ ...dataForm, avatar: e.target.value })}
						placeholder='User Image'
					></textarea>
					<button>Create</button>
				</form>
			</div>
		</section>
	)
}

export default CreateProducts
