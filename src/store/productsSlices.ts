import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductsSliceType, ProductType } from 'types/products';

const initialProductsState: ProductsSliceType = {
	products: [],
	sort: 'latest',
	display: 'all',
	includeHidden: true,
	fraudScan: false,
};

export const productsSlice = createSlice({
	name: 'products',
	initialState: initialProductsState,
	reducers: {
		getAllProducts: (state, action: PayloadAction<ProductType[]>) => {
			state.products = action.payload;
		},
		setSort: (state, action: PayloadAction<string>) => {
			state.sort = action.payload;
		},
	},
});

export const { getAllProducts, setSort } = productsSlice.actions;

export default productsSlice;
