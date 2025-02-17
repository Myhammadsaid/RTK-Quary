import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	favorites: JSON.parse(localStorage.getItem('favorites')) || [],
}

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites: (state, { payload }) => {
			const isExists = state.favorites.some(item => item.id === payload.id)
			if (isExists) {
				state.favorites = state.favorites.filter(item => item.id !== payload.id)
				localStorage.setItem('favorites', JSON.stringify(state.favorites))
			} else {
				state.favorites = [...state.favorites, payload]
				localStorage.setItem('favorites', JSON.stringify(state.favorites))
			}
		},
	},
})

export default favoritesSlice.reducer
export const { toggleFavorites } = favoritesSlice.actions
