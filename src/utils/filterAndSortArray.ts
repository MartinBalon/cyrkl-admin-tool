import { ProductType } from 'types/products';

export const filterAndSortArray = (
	array: ProductType[],
	sortBy: string,
	display: string,
	includeHidden: boolean
) => {
	const filteredAndSortedArray = [...array];

	if (sortBy === 'oldest') {
		filteredAndSortedArray.sort((a, b) => {
			return a.timestamp < b.timestamp ? -1 : a.timestamp > b.timestamp ? 1 : 0;
		});
	} else if (sortBy === 'most-expensive') {
		filteredAndSortedArray.sort(
			(a, b) => parseInt(b.price) - parseInt(a.price)
		);
	} else if (sortBy === 'cheapest') {
		filteredAndSortedArray.sort(
			(a, b) => parseInt(a.price) - parseInt(b.price)
		);
	} else {
		filteredAndSortedArray.sort((a, b) => {
			return b.timestamp < a.timestamp ? -1 : b.timestamp > a.timestamp ? 1 : 0;
		});
	}

	if (!includeHidden && includeHidden !== undefined) {
		filteredAndSortedArray.filter(offer => offer.hidden === true);
	}

	if (display === 'fradulent') {
		filteredAndSortedArray.filter(offer => offer.fradulent);
	} else if (display === 'legit') {
		filteredAndSortedArray.filter(
			offer => offer.fradulent !== undefined && !offer.fradulent
		);
	}

	return filteredAndSortedArray;
};
