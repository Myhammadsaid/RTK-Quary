import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productsApi } from './api/products.api'
import favoritesReduce from './slices/favoritesSlice'

const reducers = combineReducers({
	favorites: favoritesReduce,
	[productsApi.reducerPath]: productsApi.reducer,
})

export const store = configureStore({
	reducer: reducers,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(productsApi.middleware),
})
