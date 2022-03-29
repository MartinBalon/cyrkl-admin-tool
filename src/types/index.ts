import { ProductType } from './products';

export type OfferPropsType = {
	product: ProductType;
};

export type PaginationProps = {
	totalPages: number;
	currentPage: number;
	onChangePage: (pageNumber: number) => void;
};

export type OnClickHandlerProps = {
	onClickHandler: () => void;
};

export type ItemActionProps = {
	itemId: number;
	type: string;
};

export type ToggleOfferProps = {
	offer: ProductType;
};
