import { api } from './api'

export const productsApi = api.injectEndpoints({
	endpoints: builder => ({
		getProducts: builder.query({
			query: () => '/products',
			providesTags: () => [
				{
					type: 'Products',
				},
			],
		}),
		getProductsById: builder.query({
			query: id => ({
				url: `/products/${id}`,
			}),
		}),
		createProducts: builder.mutation({
			query: product => ({
				body: product,
				url: '/products',
				method: 'POST',
			}),
			invalidatesTags: () => [
				{
					type: 'Products',
				},
			],
		}),
		deleteProductsById: builder.mutation({
			query: id => ({
				url: `/products/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => [
				{
					type: 'Products',
				},
			],
		}),
		updateProductsById: builder.mutation({
			query: ({ id, patch }) => ({
				url: `/products/${id}`,
				method: 'PUT',
				body: patch,
			}),
			invalidatesTags: () => [
				{
					type: 'Products',
				},
			],
		}),
	}),
})

export const {
	useGetProductsQuery,
	useGetProductsByIdQuery,
	useCreateProductsMutation,
	useDeleteProductsByIdMutation,
	useUpdateProductsByIdMutation,
} = productsApi
