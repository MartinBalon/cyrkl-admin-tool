import React from 'react';
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

const Offer = ({ product }: OfferPropsType) => {
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
					Turn on the fraud scan to see more details.
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
			{product.fradulent === undefined && (
				<StatusIndicator color={color.secondaryColorLight}>
					<img src={UndefinedIcon} alt='' />
				</StatusIndicator>
			)}
			{product.fradulent !== undefined && product.fradulent && (
				<StatusIndicator color={color.errorColor}>
					<img src={ErrorIcon} alt='' />
				</StatusIndicator>
			)}
			{product.fradulent !== undefined && !product.fradulent && (
				<StatusIndicator color={color.successColor}>
					<img src={SuccessIcon} alt='' />
				</StatusIndicator>
			)}
		</List>
	);
};

export default Offer;
