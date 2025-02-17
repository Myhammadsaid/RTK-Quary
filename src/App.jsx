import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './layouts/Header'
import Admin from './pages/Admin'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import Login from './pages/Login'
import Profill from './pages/Profill'
import PrivateRoute from './routes/PrivateRoute'

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route index element={<Home />} />
					<Route path='/favorites' element={<Favorites />} />
					<Route path='/login' element={<Login />} />
					<Route path='/profill' element={<Profill />} />
					<Route
						path='/admin'
						element={
							<PrivateRoute>
								<Admin />
							</PrivateRoute>
						}
					/>
				</Routes>
			</main>
		</>
	)
}

export default App
