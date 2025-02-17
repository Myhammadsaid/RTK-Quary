import React from 'react'
import { Navigate } from 'react-router-dom'

const Profill = () => {
	const user = JSON.parse(localStorage.getItem('user')) || null

	if (!user) return <Navigate to={'/login'} />

	return (
		<section>
			<div className='container'>
				<h1>Profill</h1>
				<h1>Welcome {user?.name}!</h1>
			</div>
		</section>
	)
}

export default Profill
