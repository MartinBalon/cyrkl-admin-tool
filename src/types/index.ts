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
};

export type ToggleOfferProps = {
	offer: ProductType;
};

export type ConfirmModalProps = {
	message: string;
	onclick: (arg: boolean) => void;
};
