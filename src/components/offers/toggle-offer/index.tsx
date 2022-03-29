import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleProduct } from 'store/productsSlices';
import HideIcon from './img/hide-offer-icon.png';
import ShowIcon from './img/show-offer-icon.png';
import { actionIconsStyle } from 'theme/actionIcons';
import { ToggleOfferProps } from 'types';

const ToggleOffer = ({ offer }: ToggleOfferProps) => {
	const dispatch = useDispatch();

	const onClickHandler = () => {
		dispatch(toggleProduct(offer.id));
	};

	return (
		<img
			src={offer.hidden ? HideIcon : ShowIcon}
			alt={offer.hidden ? 'show offer' : 'hide offer'}
			style={actionIconsStyle}
			onClick={onClickHandler}
		/>
	);
};

export default ToggleOffer;
