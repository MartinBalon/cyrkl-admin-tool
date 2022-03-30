import { ProductType } from './products';

export type OfferPropsType = {
	product: ProductType;
};

export type PaginationProps = {
	totalPages: number;
	currentPage: number;
	onChangePage: (pageNumber: number) => void;
};

export type ItemDetailProps = {
	itemId: number;
};

export type DeleteItemProps = {
	itemId: number;
	type: string;
};

export type ToggleOfferProps = {
	offer: ProductType;
};
