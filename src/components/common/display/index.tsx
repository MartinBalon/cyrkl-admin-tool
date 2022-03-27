import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setDisplay, setIncludeHidden } from 'store/productsSlices';
import {
	HeaderList,
	HeaderListItem,
	HeaderListItemTitle,
} from 'theme/headerStyledList';

const Display = () => {
	const { display } = useSelector((state: RootState) => state.products);
	const { includeHidden } = useSelector((state: RootState) => state.products);
	const dispatch = useDispatch();

	return (
		<>
			<HeaderList>
				<HeaderListItemTitle>Display:</HeaderListItemTitle>
				<HeaderListItem
					active={display === 'all'}
					onClick={() => dispatch(setDisplay('all'))}
				>
					All
				</HeaderListItem>
				<HeaderListItem
					active={display === 'fraud'}
					onClick={() => dispatch(setDisplay('fraud'))}
				>
					Fraud
				</HeaderListItem>
				<HeaderListItem
					active={display === 'legit'}
					onClick={() => dispatch(setDisplay('legit'))}
				>
					Legit
				</HeaderListItem>
			</HeaderList>
			<label>
				<input
					type='checkbox'
					checked={includeHidden}
					style={{ marginRight: '5px', cursor: 'pointer' }}
					onChange={() => dispatch(setIncludeHidden())}
				/>
				Include Hidden Offers
			</label>
		</>
	);
};

export default Display;
