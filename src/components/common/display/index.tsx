import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { setDisplay, setIncludeHidden } from 'store/productsSlices';
import {
	HeaderList,
	HeaderListItem,
	HeaderListItemTitle,
} from 'theme/headerStyledList';
import { DISPLAY_FRAUD, DISPLAY_ALL, DISPLAY_LEGIT } from 'constants/constants';

const Display = () => {
	const { display } = useSelector((state: RootState) => state.products);
	const { includeHidden } = useSelector((state: RootState) => state.products);
	const { fraudScan } = useSelector((state: RootState) => state.products);
	const dispatch = useDispatch();

	return (
		<>
			<HeaderList>
				<HeaderListItemTitle>Display:</HeaderListItemTitle>
				<HeaderListItem
					active={display === DISPLAY_ALL}
					fraudScanActive={fraudScan}
					onClick={() => (fraudScan ? dispatch(setDisplay(DISPLAY_ALL)) : null)}
				>
					All
				</HeaderListItem>
				<HeaderListItem
					active={display === DISPLAY_FRAUD}
					fraudScanActive={fraudScan}
					onClick={() =>
						fraudScan ? dispatch(setDisplay(DISPLAY_FRAUD)) : null
					}
				>
					Fraud
				</HeaderListItem>
				<HeaderListItem
					active={display === DISPLAY_LEGIT}
					fraudScanActive={fraudScan}
					onClick={() =>
						fraudScan ? dispatch(setDisplay(DISPLAY_LEGIT)) : null
					}
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
