import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setSort } from 'store/productsSlices';
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
				active={sort === 'latest' || sort === 'oldest'}
				fraudScanActive={true}
				onClick={() =>
					sort === 'latest'
						? dispatch(setSort('oldest'))
						: dispatch(setSort('latest'))
				}
			>
				Date
			</HeaderListItem>
			<HeaderListItem
				active={sort === 'most-expensive' || sort === 'cheapest'}
				fraudScanActive={true}
				onClick={() =>
					sort === 'most-expensive'
						? dispatch(setSort('cheapest'))
						: dispatch(setSort('most-expensive'))
				}
			>
				Price
			</HeaderListItem>
		</HeaderList>
	);
};

export default SortBy;
