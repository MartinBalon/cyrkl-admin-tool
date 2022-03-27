import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SortBy from 'components/offers/sort-by';
import Display from 'components/common/display';
import FraudScan from 'components/common/fraud-scan';
import OfferList from 'components/offers/offer-list/OfferList';

import { client } from 'API/client';
import { getAllProducts } from 'store/productsSlices';
import { RootState } from 'store';
import { ProductType } from 'types/products';

import { paginate } from 'utils/pagination';
import { filterAndSortArray } from 'utils/filterAndSortArray';

const OffersPage = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state: RootState) => state.products);
	const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
	const [paginatedProducts, setPagionatedProducts] = useState<ProductType[]>(
		[]
	);
	const [pagination, setPagination] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);
	const [display, setDisplay] = useState('all');
	const [includeHiddenOffers, setIncludeHiddenOffers] = useState(true);
	const [sortBy, setSortBy] = useState('latest');
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
		console.log('fetching data from api');
	}, []);

	useEffect(() => {
		setFilteredProducts([
			...filterAndSortArray(products, sortBy, display, includeHiddenOffers),
		]);
	}, [products, display, sortBy, includeHiddenOffers]);

	useEffect(() => {
		setPagionatedProducts([
			...paginate(filteredProducts, pagination, currentPage),
		]);
	}, [filteredProducts]);

	return (
		<>
			<SortBy />
			<Display />
			<FraudScan />
			{fetchingError &&
				'An error has occured during fetching products. Please refresh the page.'}
			{!fetchingError && paginatedProducts.length > 0 ? (
				<OfferList products={paginatedProducts} />
			) : (
				<p>loading...</p>
			)}
		</>
	);
};

export default OffersPage;
