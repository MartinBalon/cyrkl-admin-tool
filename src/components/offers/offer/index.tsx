import React from 'react';
import { useSelector } from 'react-redux';
import { OfferPropsType } from 'types';
import {
	List,
	ListItem,
	ListItemTitle,
	ListItemDescription,
	StatusIndicator,
} from './styled';
import { color } from 'theme';
import UndefinedIcon from './icons/undefined-icon.svg';
import SuccessIcon from './icons/tick-icon.svg';
import ErrorIcon from './icons/warning-icon.svg';
import DeleteIcon from './icons/delete-icon.png';
import DetailsIcon from './icons/details-icon.png';
import HideOfferIcon from './icons/hide-offer-icon.png';
import { RootState } from 'store';

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
				<ListItemDescription>
					<img src={DetailsIcon} alt='' />
					<img src={DeleteIcon} alt='' />
					<img src={HideOfferIcon} alt='' />
				</ListItemDescription>
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
