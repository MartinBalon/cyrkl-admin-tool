import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from 'store/productsSlices';
import DeleteIcon from './img/delete-icon.png';
import { actionIconsStyle } from 'theme/actionIcons';
import { ItemActionProps } from 'types';

const DeleteItem = ({ itemId, type }: ItemActionProps) => {
	const dispatch = useDispatch();

	const onClickHandler = () => {
		if (type === 'offer') {
			dispatch(deleteProduct(itemId));
		}
	};

	return (
		<img
			src={DeleteIcon}
			alt='delete'
			style={actionIconsStyle}
			onClick={onClickHandler}
		/>
	);
};

export default DeleteItem;
