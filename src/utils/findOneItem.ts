import { ProductType } from 'types/products';

export const findOneItem = (id: number, offers: ProductType[]) => {
	const result = offers.find((item: ProductType) => item.id === id);
	return result;
};
