import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { RootState } from 'store';
import {
	ProductDescription,
	ProductHeading,
	ProductWrapper,
	LoaderWrapper,
} from './styled';
import { findOneItem } from 'utils/findOneItem';
import { ProductType } from 'types/products';
import { color } from 'theme';
import { ConvertIsoDate } from 'utils/convertIsoDate';
import Loader from 'components/common/loader';

const randomInt = Math.ceil(Math.random() * 100);

const OfferDetail = () => {
	const { itemId } = useParams();
	const { products } = useSelector((state: RootState) => state.products);
	const [offer, setOffer] = useState<ProductType>();
	const [imgLoaded, setImgLoaded] = useState(false);

	useEffect(() => {
		if (itemId) {
			setOffer(findOneItem(parseInt(itemId), products));
		}
	}, [itemId]);

	return (
		<>
			<Link
				to='/'
				style={{ textDecoration: 'none', color: color.secondaryColorLight }}
			>
				Go back
			</Link>
			{!imgLoaded && (
				<LoaderWrapper>
					<Loader />
				</LoaderWrapper>
			)}

			<ProductHeading>Offer {offer?.id} detail</ProductHeading>
			<ProductWrapper>
				<img
					src={`https://source.unsplash.com/random/500x500?sig=${randomInt}`}
					style={{ borderRadius: '20px' }}
					alt='random image'
					onLoad={() => setImgLoaded(true)}
				/>
				{imgLoaded && (
					<ProductDescription>
						<p>Name:</p>
						<span>{offer?.name0}</span>
						<br />
						<p>Description:</p>
						<span>{offer?.perex0}</span>
						<br />
						<p>Price:</p>
						<span>{`${offer?.price} ${offer?.currency}`}</span>
						<br />
						<p>Added:</p>
						<span>
							{offer?.timestamp
								? ConvertIsoDate(new Date(offer?.timestamp))
								: null}
						</span>
						<br />
						<p>Quantity:</p>
						<span>{offer?.quantity}</span>
						<br />
						<p>Region:</p>
						<span>{offer?.region}</span>
						<br />
						<p>District:</p>
						<span>{offer?.district}</span>
						<br />
						<p>Country:</p>
						<span>{offer?.country}</span>
						<br />
						<p>City</p>
						<span>{offer?.city}</span>
						<br />
						<p>Postal:</p>
						<span>{offer?.postal}</span>
						<br />
						<p>Viewed:</p>
						<span>{offer?.total_view_count}</span>
						<br />
						<p>Status:</p>
						<span>
							{offer?.hidden
								? 'Offer hidden - this offer is not visible to our customers.'
								: 'Offer visible - our customers can view this offer.'}
						</span>
						<br />
						<p>Legitimacy:</p>
						<span>
							{offer?.fraudulent
								? `Possibly fraudulent offer. ${offer?.reason}`
								: 'This offer seems legit.'}
						</span>
						<br />
					</ProductDescription>
				)}
			</ProductWrapper>
		</>
	);
};

export default OfferDetail;
