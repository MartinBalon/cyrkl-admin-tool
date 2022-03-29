import { ProductType } from 'types/products';
import {
	PRICE_CHEAP,
	PRICE_EXPENSIVE,
	DISPLAY_FRAUD,
	DISPLAY_LEGIT,
	DATE_OLDEST,
} from 'constants/constants';

export const filterAndSortArray = (
	array: ProductType[],
	sortBy: string,
	display: string,
	includeHidden: boolean
) => {
	let filteredAndSortedArray: ProductType[] = [];

	if (!includeHidden) {
		filteredAndSortedArray = array.filter(offer => !offer.hidden);
	} else {
		filteredAndSortedArray = [...array];
	}

	if (sortBy === DATE_OLDEST) {
		filteredAndSortedArray.sort((a, b) => {
			return a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0;
		});
	} else if (sortBy === PRICE_EXPENSIVE) {
		filteredAndSortedArray.sort(
			(a, b) => parseInt(b.price) - parseInt(a.price)
		);
	} else if (sortBy === PRICE_CHEAP) {
		filteredAndSortedArray.sort(
			(a, b) => parseInt(a.price) - parseInt(b.price)
		);
	} else {
		filteredAndSortedArray.sort((a, b) => {
			return b.timestamp < a.timestamp ? -1 : b.timestamp > a.timestamp ? 1 : 0;
		});
	}

	if (display === DISPLAY_FRAUD) {
		const filteredArray = filteredAndSortedArray.filter(
			offer => offer.fraudulent
		);
		return filteredArray;
	} else if (display === DISPLAY_LEGIT) {
		const filteredArray = filteredAndSortedArray.filter(
			offer => !offer.fraudulent
		);
		return filteredArray;
	}

	return filteredAndSortedArray;
};
