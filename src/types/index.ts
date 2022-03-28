import { ProductType } from './products';

export type OfferPropsType = {
	product: ProductType;
};

export type PaginationProps = {
	totalPages: number;
	currentPage: number;
	onChangePage: (pageNumber: number) => void;
};
