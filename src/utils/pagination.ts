import { ProductType } from 'types/products';

export const paginate = (
	array: ProductType[],
	pageSize: number,
	pageNumber: number
) => {
	return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
};
