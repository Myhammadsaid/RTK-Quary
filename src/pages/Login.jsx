import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = {
	name: '',
	password: '',
}

const Login = () => {
	const navigate = useNavigate()
	const [formData, setFormData] = useState(initialState)

	const handleLoginSubmit = e => {
		e.preventDefault()
		if (formData.name === 'johnd32' && formData.password === 'johndoe') {
			localStorage.setItem('user', JSON.stringify(formData))
			navigate('/admin')
		} else {
			localStorage.setItem('user', JSON.stringify(formData))
			navigate('/profill')
		}
	}

	return (
		<section>
			<div className='container'>
				<h1>Login</h1>
				<form onSubmit={handleLoginSubmit}>
					<input
						value={formData.name}
						onChange={e => setFormData({ ...formData, name: e.target.value })}
						required
						type='text'
						placeholder='User Name'
					/>
					<input
						value={formData.password}
						onChange={e =>
							setFormData({ ...formData, password: e.target.value })
						}
						required
						type='password'
						placeholder='User Password'
					/>
					<button>Login</button>
				</form>
			</div>
		</section>
	)
}

export default Login
