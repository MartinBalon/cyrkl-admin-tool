import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductsSliceType, ProductType } from 'types/products';

const initialProductsState: ProductsSliceType = {
	fetchedProducts: [],
	checkedProducts: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState: initialProductsState,
	reducers: {
		getAllProducts: (state, action: PayloadAction<ProductType[]>) => {
			state.fetchedProducts = action.payload;
		},
		filterProducts: (state, action: PayloadAction<ProductType[]>) => {
			state.checkedProducts = action.payload;
		},
	},
});

export const { getAllProducts, filterProducts } = productsSlice.actions;

export default productsSlice;
