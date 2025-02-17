import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
	const { favorites } = useSelector(state => state.favorites)
	const user = JSON.parse(localStorage.getItem('user'))

	return (
		<header>
			<div className='container'>
				<nav>
					<NavLink to={'/'}>
						<h1>Header</h1>
					</NavLink>
					<ul>
						<li>
							<NavLink
								to={
									user
										? user?.name !== 'johnd32'
											? '/profill'
											: '/admin'
										: '/login'
								}
							>
								{user
									? user.name !== 'johnd32'
										? 'Profill'
										: 'Admin'
									: 'Login'}
							</NavLink>
						</li>
						<li>
							<NavLink to={'/favorites'}>❤️</NavLink>
							<span>{favorites?.length}</span>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
