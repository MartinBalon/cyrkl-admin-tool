import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setSort } from 'store/productsSlices';
import {
	DATE_LATEST,
	DATE_OLDEST,
	PRICE_EXPENSIVE,
	PRICE_CHEAP,
} from 'constants/constants';
import {
	HeaderList,
	HeaderListItem,
	HeaderListItemTitle,
} from 'theme/headerStyledList';

const SortBy = () => {
	const { sort } = useSelector((state: RootState) => state.products);
	const dispatch = useDispatch();

	return (
		<HeaderList>
			<HeaderListItemTitle>Sort by:</HeaderListItemTitle>
			<HeaderListItem
				active={sort === DATE_LATEST || sort === DATE_OLDEST}
				fraudScanActive={true}
				onClick={() =>
					sort === DATE_LATEST
						? dispatch(setSort(DATE_OLDEST))
						: dispatch(setSort(DATE_LATEST))
				}
			>
				{sort === DATE_OLDEST && <span>&#129045;</span>}
				{sort === DATE_LATEST && <span>&#129047;</span>}
				Date
			</HeaderListItem>
			<HeaderListItem
				active={sort === PRICE_EXPENSIVE || sort === PRICE_CHEAP}
				fraudScanActive={true}
				onClick={() =>
					sort === PRICE_EXPENSIVE
						? dispatch(setSort(PRICE_CHEAP))
						: dispatch(setSort(PRICE_EXPENSIVE))
				}
			>
				{sort === PRICE_CHEAP && <span>&#129045;</span>}
				{sort === PRICE_EXPENSIVE && <span>&#129047;</span>}
				Price
			</HeaderListItem>
		</HeaderList>
	);
};

export default SortBy;
