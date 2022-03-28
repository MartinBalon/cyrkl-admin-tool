import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsSliceType, ProductType } from 'types/products';
import { DATE_LATEST, DISPLAY_ALL } from 'constants/constants';

const initialProductsState: ProductsSliceType = {
	products: [],
	sort: DATE_LATEST,
	display: DISPLAY_ALL,
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
		setDisplay: (state, action: PayloadAction<string>) => {
			state.display = action.payload;
		},
		setIncludeHidden: state => {
			state.includeHidden = !state.includeHidden;
		},
		setFraudScan: state => {
			state.fraudScan = !state.fraudScan;
		},
	},
});

export const {
	getAllProducts,
	setSort,
	setDisplay,
	setIncludeHidden,
	setFraudScan,
} = productsSlice.actions;

export default productsSlice;
