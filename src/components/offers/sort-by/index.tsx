import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { setSort } from 'store/productsSlices';
import { SortByList, SortByListItem, SortByListItemTitle } from './styled';

const SortBy = () => {
	const { sort } = useSelector((state: RootState) => state.products);
	const dispatch = useDispatch();

	return (
		<SortByList>
			<SortByListItemTitle>Sort by:</SortByListItemTitle>
			<SortByListItem
				active={sort === 'latest' || sort === 'oldest'}
				onClick={() =>
					sort === 'latest'
						? dispatch(setSort('oldest'))
						: dispatch(setSort('latest'))
				}
			>
				Date
			</SortByListItem>
			<SortByListItem
				active={sort === 'most-expensive' || sort === 'cheapest'}
				onClick={() =>
					sort === 'most-expensive'
						? dispatch(setSort('cheapest'))
						: dispatch(setSort('most-expensive'))
				}
			>
				Price
			</SortByListItem>
		</SortByList>
	);
};

export default SortBy;
