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
		deleteProduct: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(
				product => product.id !== action.payload
			);
		},
		toggleProduct: (state, action: PayloadAction<number>) => {
			state.products.find(
				product =>
					product.id === action.payload && (product.hidden = !product.hidden)
			);
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
			if (!state.fraudScan) {
				state.display = DISPLAY_ALL;
			}
		},
	},
});

export const {
	getAllProducts,
	deleteProduct,
	toggleProduct,
	setSort,
	setDisplay,
	setIncludeHidden,
	setFraudScan,
} = productsSlice.actions;

export default productsSlice;
