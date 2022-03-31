import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'store/productsSlices';
import ConfirmModal from '../confirm-modal';
import DeleteIcon from './img/delete-icon.png';
import { actionIconsStyle } from 'theme/actionIcons';
import { DeleteItemProps } from 'types';

const DeleteItem = ({ itemId }: DeleteItemProps) => {
	const dispatch = useDispatch();
	const [showConfirm, setShowConfirm] = useState(false);

	const onClickHandler = (confirmed: boolean) => {
		if (confirmed) {
			dispatch(deleteProduct(itemId));
		}
		setShowConfirm(false);
	};

	return (
		<>
			<img
				src={DeleteIcon}
				alt='delete'
				style={actionIconsStyle}
				onClick={() => setShowConfirm(true)}
				title='Delete This Offer'
			/>
			{showConfirm && (
				<ConfirmModal
					message={'Do you want to delete offer: ' + itemId + '?'}
					onclick={onClickHandler}
				/>
			)}
		</>
	);
};

export default DeleteItem;
