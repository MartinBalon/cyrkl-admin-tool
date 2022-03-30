import React from 'react';
import { Link } from 'react-router-dom';
import DetailIcon from './img/details-icon.png';
import { actionIconsStyle } from 'theme/actionIcons';
import { ItemDetailProps } from 'types';

const DetailItem = ({ itemId }: ItemDetailProps) => {
	return (
		<Link to={`/offers/offer/${itemId}`}>
			<img src={DetailIcon} alt='detail' style={actionIconsStyle} />
		</Link>
	);
};

export default DetailItem;
