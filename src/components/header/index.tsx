import React from 'react';
import Display from 'components/common/display';
import FraudScan from 'components/common/fraud-scan';
import SortBy from 'components/offers/sort-by';
import { StyledHeader } from './styled';

const Header = () => {
	return (
		<StyledHeader>
			<SortBy />
			<Display />
			<FraudScan />
		</StyledHeader>
	);
};

export default Header;
