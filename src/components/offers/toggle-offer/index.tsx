import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleProduct } from 'store/productsSlices';
import HideIcon from './img/hide-offer-icon.png';
import ShowIcon from './img/show-offer-icon.png';
import { actionIconsStyle } from 'theme/actionIcons';
import { ToggleOfferProps } from 'types';
import ConfirmModal from 'components/common/confirm-modal';

const ToggleOffer = ({ offer }: ToggleOfferProps) => {
	const dispatch = useDispatch();
	const [showConfirm, setShowConfirm] = useState(false);
	const hideOrShow = offer.hidden ? 'show' : 'hide';

	const onClickHandler = (confirmed: boolean) => {
		if (confirmed) {
			dispatch(toggleProduct(offer.id));
		}
		setShowConfirm(false);
	};

	return (
		<>
			<img
				src={offer.hidden ? HideIcon : ShowIcon}
				alt={offer.hidden ? 'show offer' : 'hide offer'}
				style={actionIconsStyle}
				onClick={() => setShowConfirm(true)}
				title={offer.hidden ? 'Show Offer' : 'Hide Offer'}
			/>
			{showConfirm && (
				<ConfirmModal
					message={'Do you want to ' + hideOrShow + ' offer: ' + offer.id + '?'}
					onclick={onClickHandler}
				/>
			)}
		</>
	);
};

export default ToggleOffer;
