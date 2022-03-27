import React from 'react';
import { ProductType } from 'types/products';

type OfferPropsType = {
	product: ProductType;
};

const Offer = ({ product }: OfferPropsType) => {
	return (
		<ul>
			<li>
				<p>Product:</p>
				<p>{product.name0}</p>
			</li>
			<li>
				<p>Description:</p>
				<p>{product.perex0}</p>
			</li>
			<li>
				<p>Price:</p>
				<p>{`${product.price} ${product.currency}`}</p>
			</li>
			<li>
				<p>Added:</p>
				<p>{product.timestamp}</p>
			</li>
			<li>
				<p>Country:</p>
				<p>{product.country}</p>
			</li>
			<li>
				<p>Status:</p>
				<p>Turn on the fraud scan to see more details.</p>
			</li>
			<li>
				<p>Actions:</p>
			</li>
		</ul>
	);
};

export default Offer;
