import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SortBy from 'components/offers/sort-by';
import Display from 'components/common/display';
import FraudScan from 'components/common/fraud-scan';

import { client } from 'API/client';
import { getAllProducts } from 'store/productsSlices';
import { RootState } from 'store';
import OfferList from 'components/offers/offer-list/OfferList';

const OffersPage = () => {
	const dispatch = useDispatch();
	const products = useSelector(
		(state: RootState) => state.products.fetchedProducts
	);
	const [fetchingError, setFetchingError] = useState('');

	useEffect(() => {
		client('products').then(
			data => {
				dispatch(getAllProducts(data));
			},
			error => {
				setFetchingError(error);
			}
		);
	}, []);

	return (
		<>
			<SortBy />
			<Display />
			<FraudScan />
			{fetchingError &&
				'An error has occured during fetching products. Please refresh the page.'}
			{!fetchingError && products && <OfferList products={products} />}
		</>
	);
};

export default OffersPage;
