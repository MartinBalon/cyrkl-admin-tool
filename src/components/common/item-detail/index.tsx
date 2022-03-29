import React from 'react';
import DetailIcon from './img/details-icon.png';
import { actionIconsStyle } from 'theme/actionIcons';
import { OnClickHandlerProps } from 'types';

const DetailItem = ({ onClickHandler }: OnClickHandlerProps) => {
	return (
		<img
			src={DetailIcon}
			alt='detail'
			style={actionIconsStyle}
			onClick={onClickHandler}
		/>
	);
};

export default DetailItem;
