import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://67ab1ce765ab088ea7e8b87b.mockapi.io'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Products'],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
	}),
	endpoints: () => ({}),
})
