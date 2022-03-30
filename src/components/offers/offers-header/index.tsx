import React from 'react';
import Display from 'components/offers/display';
import FraudScan from 'components/offers/fraud-scan';
import SortBy from 'components/offers/sort-by';
import { StyledHeader } from './styled';

const OffersHeader = () => {
	return (
		<StyledHeader>
			<SortBy />
			<Display />
			<FraudScan />
		</StyledHeader>
	);
};

export default OffersHeader;
