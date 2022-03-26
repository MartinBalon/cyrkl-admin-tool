import React from 'react';

import SortBy from 'components/offers/sort-by';
import Display from 'components/common/display';
import FraudScan from 'components/common/fraud-scan';

const OffersPage = () => {
	return (
		<>
			<SortBy />
			<Display />
			<FraudScan />
		</>
	);
};

export default OffersPage;
