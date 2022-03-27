import React from 'react';
import Offer from 'components/offers/offer';
import { ProductType } from 'types/products';

type OfferListPropst = {
	products: ProductType[];
};

const OfferList = ({ products }: OfferListPropst) => {
	return (
		<>
			{!products && 'no products'}
			{products &&
				products.length > 0 &&
				products.map((product: ProductType) => (
					<Offer key={product.id} product={product} />
				))}
		</>
	);
};

export default OfferList;
