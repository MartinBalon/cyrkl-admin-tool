import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductsSliceType, ProductType } from 'types/products';

const initialProductsState: ProductsSliceType = {
	products: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState: initialProductsState,
	reducers: {
		getAllProducts: (state, action: PayloadAction<ProductType[]>) => {
			state.products = action.payload;
		},
	},
});

export const { getAllProducts } = productsSlice.actions;

export default productsSlice;
