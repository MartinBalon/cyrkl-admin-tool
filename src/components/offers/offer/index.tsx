import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { OfferPropsType } from 'types';
import DeleteItem from 'components/common/item-delete';
import UndefinedIcon from './icons/undefined-icon.svg';
import SuccessIcon from './icons/tick-icon.svg';
import ErrorIcon from './icons/warning-icon.svg';
import DetailItem from 'components/common/item-detail';
import ToggleOffer from 'components/offers/toggle-offer';
import { color } from 'theme';
import {
	List,
	ListItem,
	ListItemTitle,
	ListItemDescription,
	StatusIndicator,
	ListItemActions,
} from './styled';

const Offer = ({ product }: OfferPropsType) => {
	const { fraudScan } = useSelector((state: RootState) => state.products);

	return (
		<List>
			<ListItem width='16%'>
				<ListItemTitle>Product:</ListItemTitle>
				<ListItemDescription>{product.name0}</ListItemDescription>
			</ListItem>

			<ListItem width='30%'>
				<ListItemTitle>Description:</ListItemTitle>
				<ListItemDescription>{product.perex0}</ListItemDescription>
			</ListItem>

			<ListItem width='6%'>
				<ListItemTitle>Price:</ListItemTitle>
				<ListItemDescription>{`${product.price} ${product.currency}`}</ListItemDescription>
			</ListItem>

			<ListItem width='10%'>
				<ListItemTitle>Added:</ListItemTitle>
				<ListItemDescription>{product.timestamp}</ListItemDescription>
			</ListItem>

			<ListItem width='6%'>
				<ListItemTitle>Country:</ListItemTitle>
				<ListItemDescription>{product.country}</ListItemDescription>
			</ListItem>

			<ListItem width='22%'>
				<ListItemTitle>Status:</ListItemTitle>
				<ListItemDescription>
					{!fraudScan && 'Turn on the fraud scan to see more details.'}
					{fraudScan &&
						product.fraudulent &&
						`Possibly fradulent: ${product.reason}`}
					{fraudScan && !product.fraudulent && 'This offer is legitimate.'}
				</ListItemDescription>
			</ListItem>

			<ListItem width='8%'>
				<ListItemTitle>Actions:</ListItemTitle>
				<ListItemActions>
					<DetailItem itemId={product.id} />
					<DeleteItem itemId={product.id} />
					<ToggleOffer offer={product} />
				</ListItemActions>
			</ListItem>

			{!fraudScan && (
				<StatusIndicator color={color.secondaryColorLight}>
					<img
						src={UndefinedIcon}
						alt=''
						style={{ height: '2rem', width: '100%' }}
					/>
				</StatusIndicator>
			)}
			{fraudScan && product.fraudulent && (
				<StatusIndicator color={color.errorColor}>
					<img
						src={ErrorIcon}
						alt=''
						style={{ height: '2rem', width: '100%' }}
					/>
				</StatusIndicator>
			)}
			{fraudScan && !product.fraudulent && (
				<StatusIndicator color={color.successColor}>
					<img
						src={SuccessIcon}
						alt=''
						style={{ height: '2rem', width: '100%' }}
					/>
				</StatusIndicator>
			)}
		</List>
	);
};

export default Offer;
