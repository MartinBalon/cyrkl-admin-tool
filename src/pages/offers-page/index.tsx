import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from 'components/header';
import OfferList from 'components/offers/offer-list/OfferList';
import { client } from 'API/client';
import { getAllProducts } from 'store/productsSlices';
import { RootState } from 'store';
import { ProductType } from 'types/products';
import { paginate } from 'utils/pagination';
import { filterAndSortArray } from 'utils/filterAndSortArray';
import { scanForFraudulentOffers } from 'utils/scanForFraudulentOffers';
import { DISPLAY_MAX_ITEMS } from 'constants/constants';
import Pagination from 'components/common/pagination';

const pagination = DISPLAY_MAX_ITEMS;

const OffersPage = () => {
	const dispatch = useDispatch();
	const { products } = useSelector((state: RootState) => state.products);
	const { sort } = useSelector((state: RootState) => state.products);
	const { display } = useSelector((state: RootState) => state.products);
	const { includeHidden } = useSelector((state: RootState) => state.products);
	const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);
	const [paginatedProducts, setPagionatedProducts] = useState<ProductType[]>(
		[]
	);
	const [currentPage, setCurrentPage] = useState(1);
	const [fetchingError, setFetchingError] = useState('');
	const totalPages = Math.ceil(filteredProducts.length / pagination);

	useEffect(() => {
		client('products').then(
			data => {
				dispatch(getAllProducts(scanForFraudulentOffers(data)));
			},
			error => {
				setFetchingError(error);
			}
		);
	}, []);

	useEffect(() => {
		setFilteredProducts([
			...filterAndSortArray(products, sort, display, includeHidden),
		]);
	}, [products, display, sort, includeHidden]);

	useEffect(() => {
		setPagionatedProducts([
			...paginate(filteredProducts, pagination, currentPage),
		]);
	}, [filteredProducts, currentPage]);

	const onChangePage = (pageNumber: number): void => {
		setCurrentPage(pageNumber);
	};

	return (
		<>
			<Header />
			{fetchingError &&
				'An error has occured during fetching products. Please refresh the page.'}
			{!fetchingError && paginatedProducts.length > 0 ? (
				<>
					<OfferList products={paginatedProducts} />
					<Pagination
						totalPages={totalPages}
						currentPage={currentPage}
						onChangePage={onChangePage}
					/>
				</>
			) : (
				<p>loading...</p>
			)}
		</>
	);
};

export default OffersPage;
